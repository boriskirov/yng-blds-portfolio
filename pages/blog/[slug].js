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
      <div className="post-image">
        {coverUrl && (
          <div>
            <img src={coverUrl} alt={title} />
            <div />
          </div>
        )}
      </div>
      <div className="blog-container">
        <Link href="./">Go Back</Link>

        <h1 className="post-title">{title}</h1>
        <small>{date}</small>
        <div className="flex post-tags">
          {tags.map((tag) => (
            <span key={tag.id} className="post-tag">
              {tag.name}
            </span>
          ))}
        </div>

        <hr className="post-divider" />

        <div>
          {blocks.map((block) => {
            const type = block.type;
            const value = block[type];

            if (type === "divider") {
              return <hr key={block.id} className="post-divider" />;
            }

            if (block.type === "image") {
              const value = block.image;
              const imageUrl =
                value.type === "external" ? value.external.url : value.file.url;

              const caption = value.caption?.[0]?.plain_text || "";

              return (
                <figure
                  key={block.id}
                  className="flex flex-column post-image-caption "
                >
                  <img
                    src={imageUrl}
                    alt={caption}
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                  {caption && <figcaption>{caption}</figcaption>}
                </figure>
              );
            }

            // Skip empty rich_text blocks
            if (!value || !value.rich_text || value.rich_text.length === 0)
              return null;

            const text = value.rich_text.map((t) => t.plain_text).join("");

            if (block.type === "paragraph") {
              const textArray = block.paragraph?.rich_text;
              if (!textArray || textArray.length === 0) return null;

              return <p key={block.id}>{renderText(textArray)}</p>;
            }

            if (type === "heading_1") {
              return <h1 key={block.id}>{text}</h1>;
            }

            if (type === "heading_2") {
              return <h2 key={block.id}>{text}</h2>;
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
    fallback: "blocking", // allows new slugs to build live
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const blocks = await getPageContent(post.id);

  return {
    props: { post, blocks },
    revalidate: 60,
  };
}
