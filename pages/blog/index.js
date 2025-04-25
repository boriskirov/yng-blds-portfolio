import { getAllPosts } from "../../lib/blog";
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div className="main-container">
      <div className="blog-container">
        <h1>Blog</h1>
        <ul className="flex flex-column">
          {posts.map((post) => {
            const title =
              post?.properties?.["Blog Title"]?.rich_text?.[0]?.plain_text ||
              "Untitled";

            const slug =
              post?.properties?.Slug?.rich_text?.[0]?.plain_text || "#";

            const description =
              post?.properties?.Description?.rich_text?.[0]?.plain_text || "";

            const coverUrl =
              post?.cover?.external?.url || post?.cover?.file?.url || null;

            const date = post?.properties.Date?.date?.start;

            const tags = post?.properties?.Tags?.multi_select || [];

            const number = post?.properties?.Number?.number || null;

            return (
              <li key={post.id} className="post-list-item">
                <Link href={`/blog/${slug}`} className="post-item">
                  <div className="flex flex-column">
                    <h3>{title}</h3>
                    <span>{description}</span>
                    <div className="flex post-metadata">
                      {number !== null && <small>#{number}•</small>}
                      <small className="post-date">{date}</small>
                    </div>
                  </div>
                  <img
                    src={coverUrl}
                    alt={title}
                    className="post-cover-image"
                  />
                </Link>
                <div>
                  {tags.map((tag) => (
                    <span key={tag.id} className="post-tag">
                      {tag.name}
                    </span>
                  ))}
                </div>
                <hr className="post-divider" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}
