import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Home() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="yng.blds" description="photography & videography" />
      <Header />

      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12">
            <div className="index-cover"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
