import { Client } from "@notionhq/client";
import { generateRSS } from "../../lib/generateRSS";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 200,
  });

  const rss = generateRSS(response.results);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
