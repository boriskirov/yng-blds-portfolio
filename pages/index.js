import Header from "../components/header";
import Metadata from "../components/metadata";
import PreOrderNow from "../components/pre-order-now";

export default function Home() {
  return (
    <div className="main-container grid index-cover cover-main">
      <Metadata
        title="Boris Kirov | yng.blds"
        description="Photography & videography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <PreOrderNow
          text="Book: '200 Postcards' available for pre-order now"
          href={"200-postcards"}
        />
      </main>
    </div>
  );
}
