import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      author: post.data.author,
      categories: [post.data.category, ...(post.data.tags ?? [])],
    })),
    customData: `<language>id</language>`,
  });
}