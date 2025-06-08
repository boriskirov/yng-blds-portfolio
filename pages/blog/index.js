import { getAllPosts } from "../../lib/blog";
import Link from "next/link";
import Metadata from "../../components/metadata";
import Header from "../../components/header";
import SubscribeForm from "../../components/subscribe";

export default function BlogList({ posts }) {
  return (
    <div className="main-container">
      <Metadata title="About" image="/avatar.png" />
      <Header />
      <div className="blog-container">
        <div className="blog-footer flex flex-column daynotes-wrapper">
          <small>
            Third Place is a concept around the third social space, after your
            home and work, designed to be used for fostering community,
            creativity and connections. This newsletter would be with longer
            essays related to photography, movement and creativity.
            <br />
            <br />
            If you want to recieve those as emails, you know what to do.
          </small>
          <SubscribeForm />
        </div>
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
                  <div className="flex flex-column align-center">
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
  return { props: { posts }, revalidate: 60 };
}
