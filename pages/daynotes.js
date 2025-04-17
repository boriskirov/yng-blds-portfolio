import { Client } from "@notionhq/client";
import Metadata from "../components/metadata";
import Header from "../components/header";

export default function Daynotes({ results }) {
  const getDatabaseDisplay = () => {
    let jsx = [];
    results.forEach((blog) => {
      jsx.push(
        <div className="blog-card" key={blog.id}>
          <small className="blog-date">{blog.properties.Date.date.start}</small>
          <br />
          <p className="blog-text">
            {blog.properties.Text.rich_text[0]?.plain_text}
          </p>
          <img
            className="blog-image"
            src={blog.properties.Photo.files[0]?.external?.url}
            alt="Photo"
          />
        </div>
      );
    });
    return jsx;
  };

  return (
    <div>
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
    },
  };
}
