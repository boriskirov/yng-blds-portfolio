import { Client } from "@notionhq/client";
import { generateRSS } from "../../lib/generateRSS";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const daynotesDatabaseId = process.env.NOTION_DATABASE_ID;
  const blogDatabaseId = process.env.NOTION_DATABASE_BLOG_ID;

  if (!daynotesDatabaseId || !blogDatabaseId) {
    throw new Error(
      "Missing NOTION_DAYNOTES_DATABASE_ID or NOTION_BLOG_DATABASE_ID in environment variables."
    );
  }

  // Fetch daynotes
  const daynotesResponse = await notion.databases.query({
    database_id: daynotesDatabaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 100,
  });

  // Fetch blog posts
  const blogResponse = await notion.databases.query({
    database_id: blogDatabaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 100,
  });

  // Merge posts
  const allPosts = [...daynotesResponse.results, ...blogResponse.results];

  // Sort by Date descending
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.properties.Date?.date?.start || 0);
    const dateB = new Date(b.properties.Date?.date?.start || 0);
    return dateB - dateA;
  });

  const rss = generateRSS(sortedPosts);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
