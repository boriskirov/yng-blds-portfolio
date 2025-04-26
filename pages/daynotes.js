import { Client } from "@notionhq/client";
import Metadata from "../components/metadata";
import Header from "../components/header";
import SubscribeForm from "../components/subscribe";

export default function Daynotes({ results }) {
  const getDatabaseDisplay = () => {
    return results.map((blog) => {
      const date = blog.properties.Date?.date?.start;
      const text = blog.properties.Text?.rich_text?.[0]?.plain_text;
      // const title = blog.properties.Title?.title?.[0]?.plain_text || "Untitled";
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
      <div className="blog-container">
        <div className="blog-footer flex flex-column daynotes-wrapper">
          <small>
            Daynotes is a lightweight, almost daily, from time to time,
            low-friction journaling method. It's microblogging which I use to
            reflect and observe my own thoughts and behavior. If you appreciate
            my writing and photography, feel free to subscribe for my blog.
          </small>
          <SubscribeForm />
        </div>
        <div>{getDatabaseDisplay()}</div>
        <div className="blog-footer">
          <p>You have reached the end ...</p>
        </div>
      </div>
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
    revalidate: 60,
  };
}
