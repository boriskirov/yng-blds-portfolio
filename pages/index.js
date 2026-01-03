import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Home() {
  return (
    <div className="main-container grid index-cover cover-main">
      <Metadata
        title="Boris Kirov"
        description="Photography & videography"
        image="/avatar.png"
      />
      <Header header={false} />
      <main className="cs1 ce12"></main>
    </div>
  );
}
