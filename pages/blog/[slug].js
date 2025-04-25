import { getAllPosts, getPostBySlug, getPageContent } from "../../lib/blog";
import { getTitle } from "../../lib/utils";

export default function BlogPost({ post, blocks }) {
  const title = getTitle(post);
  const date = post?.properties?.Date?.date?.start || "No date";

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 mb-6">{date}</p>

      <div className="space-y-4 mt-6">
        {blocks.map((block) => {
          const type = block.type;
          const value = block[type];

          // Skip empty rich_text blocks
          if (!value || !value.rich_text || value.rich_text.length === 0)
            return null;

          const text = value.rich_text.map((t) => t.plain_text).join("");

          if (type === "paragraph") {
            return <p key={block.id}>{text}</p>;
          }

          if (type === "heading_1") {
            return (
              <h1 key={block.id} className="text-2xl font-bold">
                {text}
              </h1>
            );
          }

          if (type === "heading_2") {
            return (
              <h2 key={block.id} className="text-xl font-semibold">
                {text}
              </h2>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

// Pre-build all valid slug pages
export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts
    .map((post) => {
      const slug = post?.properties?.Slug?.rich_text?.[0]?.plain_text;
      if (typeof slug === "string") {
        return { params: { slug } };
      }
      return null;
    })
    .filter(Boolean);

  return {
    paths,
    fallback: false, // set to true if you want fallback loading
  };
}

// Build each individual blog post page
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const blocks = await getPageContent(post.id);

  console.log("Fetched blocks:", blocks); // 👈 Add this

  return {
    props: {
      post,
      blocks,
    },
  };
}
