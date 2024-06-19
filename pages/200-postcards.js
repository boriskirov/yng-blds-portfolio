import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/200-postcards-transparent.png";
import PreOrderNow from "../components/pre-order-now";

export default function TwoHundredPostcards() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="yng.blds" description="200 Postcards" />
      <Header />
      <main className="cs1 ce12">
        <div
          className="main-container grid about-bg"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <PreOrderNow text="PRE-ORDER NOW" />
      </main>
    </div>
  );
}
