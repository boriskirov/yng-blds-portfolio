// filepath: pages/api/likes.js
import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { pageId } = req.query;

    if (!pageId) {
      return res.status(400).json({ error: "Missing pageId" });
    }

    const page = await prisma.page.findUnique({
      where: { id: pageId },
    });

    return res.json({
      likes: page?.likes || 0,
    });
  }

  if (req.method === "POST") {
    const { pageId } = req.body;

    if (!pageId) {
      return res.status(400).json({ error: "Missing pageId" });
    }

    const page = await prisma.page.upsert({
      where: { id: pageId },
      update: {
        likes: {
          increment: 1,
        },
      },
      create: {
        id: pageId,
        likes: 1,
      },
    });

    return res.json({
      likes: page.likes,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
