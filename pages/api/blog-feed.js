import { Client } from "@notionhq/client";
import { generateRSS } from "../../lib/generateRSS";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const blogDatabaseId = process.env.NOTION_DATABASE_BLOG_ID;

  if (!blogDatabaseId) {
    throw new Error(
      "Missing NOTION_DATABASE_BLOG_ID in environment variables."
    );
  }

  // Fetch blog posts only
  const blogResponse = await notion.databases.query({
    database_id: blogDatabaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 100,
  });

  // Force Type
  const blogs = blogResponse.results.map((post) => ({
    ...post,
    properties: {
      ...post.properties,
      Type: { select: { name: "blog" } },
    },
  }));

  const rss = generateRSS(blogs);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
