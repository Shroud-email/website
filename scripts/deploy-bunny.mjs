// Publish the built site (dist/client) to a bunny.net Storage Zone and purge
// the Pull Zone cache.
//
// Performs a clean deploy: the existing zone contents are deleted first so that
// removed pages and stale hashed assets don't linger.
//
// Required env vars:
//   BUNNY_STORAGE_PASSWORD  - storage zone read/write password (AccessKey)
//   BUNNY_PULLZONE_ID       - numeric Pull Zone id (for cache purge)
//   BUNNY_API_KEY           - account API key (for cache purge)

import { readFile, readdir } from "node:fs/promises";
import { join, relative, extname } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;

// Directory (relative to the repo root) holding the static site to publish.
const DIST = join(ROOT, "dist");

const ZONE = "shroud-email-website";
// Storage endpoint for the zone's region. The default (Falkenstein, DE) is
// `storage.bunnycdn.com`; other regions use a prefix, e.g. `ny.storage...`.
const STORAGE_ENDPOINT = process.env.BUNNY_STORAGE_ENDPOINT || "storage.bunnycdn.com";

const {
  BUNNY_STORAGE_PASSWORD: PASSWORD,
  BUNNY_PULLZONE_ID: PULLZONE_ID,
  BUNNY_API_KEY: API_KEY,
} = process.env;

for (const [name, value] of Object.entries({
  BUNNY_STORAGE_PASSWORD: PASSWORD,
  BUNNY_PULLZONE_ID: PULLZONE_ID,
  BUNNY_API_KEY: API_KEY,
})) {
  if (!value) {
    console.error(`Missing required env var: ${name}`);
    process.exit(1);
  }
}

const base = `https://${STORAGE_ENDPOINT}/${ZONE}/`;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".webmanifest": "application/manifest+json",
  ".pdf": "application/pdf",
};

const contentType = (path) => MIME[extname(path).toLowerCase()] || "application/octet-stream";

// Recursively collect every file under `dir`, skipping dotfiles such as
// .DS_Store (macOS) and .assetsignore (Cloudflare-specific).
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(abs)));
    else files.push(abs);
  }
  return files;
}

// List the immediate contents of a storage path (must end with "/").
async function list(path = "") {
  const res = await fetch(`${base}${path}`, { headers: { AccessKey: PASSWORD } });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`List ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function remove(path) {
  const res = await fetch(`${base}${path}`, {
    method: "DELETE",
    headers: { AccessKey: PASSWORD },
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`Delete ${path} failed: ${res.status} ${await res.text()}`);
  }
}

async function put(rel, body) {
  const res = await fetch(`${base}${rel}`, {
    method: "PUT",
    headers: { AccessKey: PASSWORD, "Content-Type": contentType(rel) },
    body,
  });
  if (!res.ok) throw new Error(`Upload ${rel} failed: ${res.status} ${await res.text()}`);
  return rel;
}

async function upload(abs) {
  const rel = relative(DIST, abs).split(/[/\\]/).join("/");
  return put(rel, await readFile(abs));
}

async function purge() {
  const res = await fetch(`https://api.bunny.net/pullzone/${PULLZONE_ID}/purgeCache`, {
    method: "POST",
    headers: { AccessKey: API_KEY },
  });
  if (!res.ok) throw new Error(`Purge failed: ${res.status} ${await res.text()}`);
}

// Run async tasks with a bounded concurrency so large deploys stay fast
// without opening hundreds of sockets at once.
async function pool(items, limit, fn) {
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const item = items[i++];
      await fn(item);
    }
  });
  await Promise.all(workers);
}

console.log(`Cleaning storage zone ${ZONE}…`);
const existing = await list("");
await pool(existing, 8, (item) =>
  remove(item.IsDirectory ? `${item.ObjectName}/` : item.ObjectName),
);

const files = await walk(DIST);
console.log(`Uploading ${files.length} file(s) to ${ZONE}…`);
let done = 0;
await pool(files, 10, async (abs) => {
  await upload(abs);
  done++;
});
console.log(`  ↑ ${done} uploaded`);

// Bunny serves a custom 404 only from bunnycdn_errors/404.html at the zone
// root, so publish the built 404 page there too.
console.log("Publishing custom 404 page…");
await put("bunnycdn_errors/404.html", await readFile(join(DIST, "404.html")));

console.log("Purging Pull Zone cache…");
await purge();

console.log("Done.");
