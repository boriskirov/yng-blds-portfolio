import { notion } from "./notion";

const databaseId = process.env.NOTION_DATABASE_BLOG_ID;

export async function getAllPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });
  return response.results;
}

export async function getPostBySlug(slug) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return response.results[0];
}

export async function getPageContent(pageId) {
  let results = [];
  let cursor = undefined;

  while (true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    results = results.concat(response.results);

    if (!response.has_more) break;
    cursor = response.next_cursor;
  }

  return results;
}
