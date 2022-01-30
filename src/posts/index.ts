import { parseISO, isBefore } from 'date-fns';

export async function getAllPosts() {
  const files = await import.meta.glob("./**/*.md");
  const posts = (
    await Promise.all(
      Object.values(files).map((importFile: any, index) =>
        importFile().then((res) => {
          const { title, description, authors, date, image } = res.frontmatter;
          const href = Object.keys(files)
            [index].replace(/^\./, "/blog")
                .replace(/\.md$/, "");
          return {
            title,
            description,
            authors,
            image,
            date: parseISO(date),
            href,
          };
        })
      )
    )
  ).sort((a, b) => {
    if (isBefore(a.date, b.date)) return 1;
    if (isBefore(b.date, a.date)) return -1;
    return 0;
  });
  return posts;
}
