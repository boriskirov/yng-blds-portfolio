import RSS from "rss";

export function generateRSS(posts) {
  const feed = new RSS({
    title: "Boris Kirov",
    description: "Daynotes and Photo Essays by Boris Kirov.",
    site_url: "https://boriskirov.photos",
    feed_url: "https://boriskirov.photos/feed.xml",
    language: "en",
  });

  posts.forEach((post) => {
    const date = post.properties.Date?.date?.start;

    const title =
      post.properties?.Name?.title?.[0]?.plain_text?.trim() ||
      post.properties?.Title?.title?.[0]?.plain_text?.trim() ||
      "Untitled Post";

    const slug = post.properties.Slug?.rich_text?.[0]?.plain_text || null;

    const type = post.properties.Type?.select?.name || "daynote"; // e.g., "daynote" or "blog"

    const url =
      type === "blog"
        ? `https://boriskirov.photos/blog/${slug || post.id}`
        : `https://boriskirov.photos/daynotes#${post.id}`;

    const textBlocks = post.properties.Text?.rich_text || [];
    const textContent = textBlocks
      .map((block) => block.plain_text)
      .join(" ")
      .trim();

    const descriptionBlocks = post.properties.Description?.rich_text || [];
    const descriptionContent = descriptionBlocks
      .map((block) => block.plain_text)
      .join(" ")
      .trim();

    let description = "No description available";

    if (type === "blog") {
      if (descriptionContent) {
        description = descriptionContent;
      } else if (textContent) {
        // If no Description, fallback to first 15 words of main text
        const words = textContent.split(/\s+/).slice(0, 15).join(" ");
        description =
          words + (textContent.split(/\s+/).length > 15 ? "..." : "");
      }
    } else if (type === "daynote") {
      if (textContent) {
        const words = textContent.split(/\s+/).slice(0, 15).join(" ");
        description =
          words + (textContent.split(/\s+/).length > 15 ? "..." : "");
      }
    }

    const image =
      post.properties.Photo?.files?.[0]?.external?.url ||
      post.properties.Photo?.files?.[0]?.file?.url;

    const contentBlocks =
      post.properties.Content?.rich_text ||
      post.properties.Text?.rich_text ||
      [];
    const fullContent = contentBlocks
      .map((block) => block.plain_text)
      .join("\n")
      .trim();

    const content = image
      ? `<img src="${image}" alt="${title}" /><p>${
          fullContent || description
        }</p><p><a href="${url}">Read more</a></p>`
      : `<p>${
          fullContent || description
        }</p><p><a href="${url}">Read more</a></p>`;

    feed.item({
      title: title,
      date: date,
      description: description,
      url: url,
      guid: post.id,
      custom_elements: [{ "content:encoded": content }],
    });
  });

  return feed.xml({ indent: true });
}
