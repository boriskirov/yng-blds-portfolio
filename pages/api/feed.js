import { Client } from "@notionhq/client";
import { generateRSS } from "../../lib/generateRSS";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = "1d85e33232e3808b9116c7242cae0376";

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 20,
  });

  const rss = generateRSS(response.results);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
