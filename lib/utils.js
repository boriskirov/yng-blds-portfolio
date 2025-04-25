export function getTitle(post) {
  if (!post?.properties) return "Untitled";

  const titleProp = Object.entries(post.properties).find(
    ([, prop]) => prop?.type === "title"
  );

  const title = titleProp?.[1]?.title?.map((t) => t.plain_text).join("");
  return title || "Untitled";
}
