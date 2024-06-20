import Header from "../components/header";
import Metadata from "../components/metadata";
import PreOrderNow from "../components/pre-order-now";

export default function Home() {
  return (
    <div className="main-container grid index-cover cover">
      <Metadata title="yng.blds" description="photography & videography" />
      <Header />
      <main className="cs1 ce12">
        <PreOrderNow text="Book: '200 Postcards' will be available for pre-order soon" />
      </main>
    </div>
  );
}
