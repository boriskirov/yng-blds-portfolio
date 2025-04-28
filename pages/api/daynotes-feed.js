import { Client } from "@notionhq/client";
import { generateRSS } from "../../lib/generateRSS";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const daynotesDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!daynotesDatabaseId) {
    throw new Error("Missing NOTION_DATABASE_ID in environment variables.");
  }

  // Fetch daynotes only
  const daynotesResponse = await notion.databases.query({
    database_id: daynotesDatabaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 100,
  });

  // Force Type
  const daynotes = daynotesResponse.results.map((post) => ({
    ...post,
    properties: {
      ...post.properties,
      Type: { select: { name: "daynote" } },
    },
  }));

  const rss = generateRSS(daynotes);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
