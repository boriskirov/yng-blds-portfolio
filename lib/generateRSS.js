import RSS from "rss";

function safeGetImage(post) {
  const tryFields = ["Photo", "Cover", "Image", "Main Image", "Cover Image"];

  // Try known file properties first
  for (const field of tryFields) {
    const file = post.properties?.[field]?.files?.[0];
    if (file) {
      return file.external?.url || file.file?.url;
    }
  }

  // 🛠 Try page cover if no file found
  if (post.cover) {
    if (post.cover.type === "external") {
      return post.cover.external.url;
    } else if (post.cover.type === "file") {
      return post.cover.file.url;
    }
  }

  return undefined; // fallback if still nothing
}

// 🛠 Then your main function
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
    const type = post.properties.Type?.select?.name || "daynote";

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

    // 🛠 USE the new safe image getter here
    const image = safeGetImage(post);

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
        }</p>`
      : `<p>${fullContent || description}</p>`;

    console.log({
      id: post.id,
      title: title,
      type: type,
      description: description,
      image: image,
    });

    feed.item({
      title: title,
      date: date,
      description: description,
      url: url,
      guid: post.id,
      author: "Boris Kirov",
      custom_elements: [{ "content:encoded": content }],
    });
  });

  return feed.xml({ indent: true });
}
