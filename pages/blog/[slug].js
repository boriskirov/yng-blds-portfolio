import { getAllPosts, getPostBySlug, getPageContent } from "../../lib/blog";
import { getTitle } from "../../lib/utils";
import Link from "next/link";
import { renderText } from "../../lib/renderText";

export default function BlogPost({ post, blocks }) {
  const title = getTitle(post);
  const date = post?.properties?.Date?.date?.start || "No date";
  const tags = post?.properties?.Tags?.multi_select || [];
  const coverUrl = post?.cover?.external?.url || post?.cover?.file?.url || null;

  return (
    <div className="main-container">
      {/* Hero image */}
      {coverUrl && (
        <div className="post-image">
          <img src={coverUrl} alt={title} />
        </div>
      )}

      <div className="blog-container">
        <Link href="./">Go Back</Link>

        <h1 className="post-title">{title}</h1>
        <small>{date}</small>

        {/* Tags */}
        <div className="flex post-tags">
          {tags.map((tag) => (
            <span key={tag.id} className="post-tag">
              {tag.name}
            </span>
          ))}
        </div>

        <hr className="post-divider" />

        {/* Render each block */}
        <div>
          {blocks.map((block) => {
            const { id, type } = block;
            const value = block[type];

            if (!value) return null;

            if (type === "divider") {
              return <hr key={id} className="post-divider" />;
            }

            if (type === "image") {
              const imageUrl =
                value.type === "external" ? value.external.url : value.file.url;
              const caption = value.caption?.[0]?.plain_text || "";

              return (
                <figure key={id} className="flex flex-column post-image-caption">
                  <img
                    src={imageUrl}
                    alt={caption}
                    loading="lazy"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                  />
                  {caption && <figcaption>{caption}</figcaption>}
                </figure>
              );
            }

            if (type === "paragraph") {
              const textArray = value.rich_text;
              if (!textArray || textArray.length === 0) return null;

              return (
                <p key={id} className="mb-4 leading-relaxed">
                  {renderText(textArray)}
                </p>
              );
            }

            if (type === "heading_1") {
              return <h1 key={id}>{renderText(value.rich_text)}</h1>;
            }

            if (type === "heading_2") {
              return <h2 key={id}>{renderText(value.rich_text)}</h2>;
            }

            if (type === "heading_3") {
              return <h3 key={id}>{renderText(value.rich_text)}</h3>;
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const blocks = await getPageContent(post.id);

  // ✅ Add this:
  console.log("Blocks fetched from Notion:", JSON.stringify(blocks, null, 2));

  return {
    props: { post, blocks },
    revalidate: 60,
  };
}


// Example usage of renderText function in a paragraph