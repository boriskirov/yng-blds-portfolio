import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/200-postcards-transparent.png";
import bookOpen from "../public/200-postcards-open.png";
import PreOrderNow from "../components/pre-order-now";

export default function TwoHundredPostcards() {
  return (
    <div className="main-container grid">
      <Metadata title="yng.blds" description="200 Postcards" />
      <Header />
      <main className="cs1 ce12" style={{ height: "100vh" }}>
        <div className="grid">
          <div
            className="cs1 ce12 cover"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          ></div>
          <div
            className="cs1 ce12 cover"
            style={{
              backgroundImage: `url(${bookOpen.src})`,
            }}
          ></div>
        </div>
        <PreOrderNow text="Available for pre-order soon!" />
      </main>
    </div>
  );
}
