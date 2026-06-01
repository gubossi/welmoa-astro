import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() -
        new Date(a.data.pubDate).getTime()
    )
    .slice(0, 6)
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      pubDate: post.data.pubDate,
      url: `https://blog.welmoa.kr/blog/${post.id}/`,
    }));

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
