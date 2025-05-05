import { Client } from "@notionhq/client";
import Metadata from "../components/metadata";
import Header from "../components/header";
import SubscribeForm from "../components/subscribe";
import AutoOrientedImage from "../components/AutoOrientedImage";

export default function Daynotes({ results }) {
  const getDatabaseDisplay = () => {
    return results.map((blog) => {
      const date = blog.properties.Date?.date?.start;
      const text = blog.properties.Text?.rich_text?.[0]?.plain_text;
      const number = blog.properties.Number?.rich_text?.[0]?.plain_text;

      const image =
        blog.properties.Photo?.files?.[0]?.external?.url ||
        blog.properties.Photo?.files?.[0]?.file?.url;

      return (
        <div className="blog-card" key={blog.id}>
          <div className="flex daynote-metadata">
            {number && <strong># {number}</strong>}
            {date && <small className="blog-date">{date}</small>}
          </div>
          {text && <p className="blog-text">{text}</p>}
          {image && <AutoOrientedImage src={image} alt="Daynote image" />}
          <small className="blog-separator">***</small>
        </div>
      );
    });
  };

  return (
    <div className="main-container">
      <Metadata
        title="Daynotes"
        description="Lightweigth, low-friction journaling technique newsletter with a pop-up twist."
      />
      <Header />
      <div className="blog-container grid">
        <div className="cs1 ce12">
          <h3>
            Season 1: Komorebi <strong>(木漏れ日)</strong>
          </h3>
          <small>The seasons is currently running until mid May.</small>
        </div>
        <div className="blog-footer flex flex-column daynotes-wrapper cs1 ce12">
          <small>
            If you want to receive new editions as emails, you know what to do.
          </small>
          <SubscribeForm />
        </div>
        <div className="cs1 ce12">{getDatabaseDisplay()}</div>
        <div className="blog-footer flex flex-column daynotes-wrapper cs1 ce12">
          <small>
            Daynotes is a lightweight, almost daily, from time to time,
            low-friction journaling technique, with a pop-up twist. It happens
            in seasons, and in between I take breaks to get new inspiration.
          </small>
          <br />
          <small>
            If you reached that point, my guess is you liked it. You can
            subscribe and receive new editions via email.
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
