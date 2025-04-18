import { Client } from "@notionhq/client";
import Metadata from "../components/metadata";
import Header from "../components/header";

export default function Daynotes({ results }) {
  const getDatabaseDisplay = () => {
    return results.map((blog) => {
      const date = blog.properties.Date?.date?.start;
      const text = blog.properties.Text?.rich_text?.[0]?.plain_text;
      const image =
        blog.properties.Photo?.files?.[0]?.external?.url ||
        blog.properties.Photo?.files?.[0]?.file?.url;

      return (
        <div className="blog-card" key={blog.id}>
          {date && <small className="blog-date">{date}</small>}
          {text && <p className="blog-text">{text}</p>}
          {image && (
            <img
              className="blog-image"
              src={image}
              alt="Daynote image"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          )}
          <small className="blog-separator">***</small>
        </div>
      );
    });
  };

  return (
    <div className="main-container">
      <Metadata title="Daynotes" description="Daynotes" />
      <Header />
      <div className="blog-container">{getDatabaseDisplay()}</div>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const databaseId = "1d85e33232e3808b9116c7242cae0376";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    props: {
      results: response.results,
      revalidate: 60,
    },
  };
}
