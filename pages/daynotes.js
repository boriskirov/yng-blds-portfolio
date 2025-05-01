import { Client } from "@notionhq/client";
import Metadata from "../components/metadata";
import Header from "../components/header";
import SubscribeForm from "../components/subscribe";

export default function Daynotes({ results }) {
  const getDatabaseDisplay = () => {
    return results.map((blog) => {
      const date = blog.properties.Date?.date?.start;
      const text = blog.properties.Text?.rich_text?.[0]?.plain_text;
      const number = blog.properties.Number?.rich_text?.[0]?.plain_text;

      // const title = blog.properties.Title?.title?.[0]?.plain_text || "Untitled";
      const image =
        blog.properties.Photo?.files?.[0]?.external?.url ||
        blog.properties.Photo?.files?.[0]?.file?.url;

      return (
        <div className="blog-card" key={blog.id}>
          <div className="flex daynote-metadata ">
            {number && <strong># {number}</strong>}
            {date && <small className="blog-date">{date}</small>}
          </div>
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
            low-friction journaling method, with a pop-up twist. It happens in
            seasons, and in between I take breaks to get new inspiration.
          </small>
          <br />
          <small>If you want to support me, subscribe.</small>
          <SubscribeForm />
        </div>
        <div>{getDatabaseDisplay()}</div>
        <div className="blog-footer flex flex-column daynotes-wrapper">
          <small>
            If you reached that point, my guess is you liked it. You can
            subscribe and support my writing and photography.
          </small>
          <SubscribeForm />
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
