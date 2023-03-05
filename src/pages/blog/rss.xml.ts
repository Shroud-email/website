import rss from "@astrojs/rss";
import { isBefore } from "date-fns";
import { getCollection } from "astro:content";

import { SITE } from "../../config";
import type { APIRoute } from "astro";

export const get: APIRoute = async (context) => {
  const blog = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.description,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    site: context.site!.href,
    items: blog
      .map(({ data: { title, description, date }, slug }) => {
        return {
          link: `/blog/${slug}/`,
          title,
          description,
          pubDate: date,
        };
      })
      .sort((a, b) => {
        if (isBefore(a.pubDate, b.pubDate)) return 1;
        if (isBefore(b.pubDate, a.pubDate)) return -1;
        return 0;
      }),
    customData: "<language>en-us</language>",
  });
};
