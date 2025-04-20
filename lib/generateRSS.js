import RSS from "rss";

export function generateRSS(posts) {
  const feed = new RSS({
    title: "Boris Kirov",
    description: "Daily Daynotes with photos and reflections.",
    site_url: "https://boriskirov.photos",
    feed_url: "https://boriskirov.photos/feed.xml",
    language: "en",
  });

  posts.forEach((post) => {
    const date = post.properties.Date?.date?.start;
    const title = post.properties.Name?.title?.[0]?.plain_text || "Untitled";
    const description =
      post.properties.Text?.rich_text?.[0]?.plain_text || "Daily note";

    const image =
      post.properties.Photo?.files?.[0]?.external?.url ||
      post.properties.Photo?.files?.[0]?.file?.url;

    const content = image
      ? `<img src="${image}" alt="${title}" /><p>${description}</p>`
      : `<p>${description}</p>`;

    feed.item({
      title: title,
      date: date,
      description: description,
      url: `https://your-domain.com/daynotes#${post.id}`,
      guid: post.id,
      custom_elements: [{ "content:encoded": content }],
    });
  });

  return feed.xml({ indent: true });
}
