import  rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { parseISO, isBefore } from 'date-fns';

import { SITE } from "../../config"


export const get = async () => {
  const postImportResult = await pagesGlobToRssItems(import.meta.globEager('./*.md'));
  const posts = Object.values(postImportResult);
  rss({
    title: SITE.title,
    description: SITE.description,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    site: SITE.site,
    items: posts.map(({ frontmatter, url })=> {
      return ({
      link: url,
      title: frontmatter.title,
      pubDate: parseISO(frontmatter.date),
    })
  }).sort((a, b) => {
      if (isBefore(a.pubDate, b.pubDate)) return 1
      if (isBefore(b.pubDate, a.pubDate)) return -1
      return 0
    }),
    customData: "<language>en-us</language>",
  });
}