import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/200-postcards-dark.jpg";
import PreOrderNow from "../components/pre-order-now";

export default function TwoHundredPostcards() {
  return (
    <div
      className="main-container grid about-bg"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "90vw",
        height: "90vh",
      }}
    >
      <Metadata title="yng.blds" description="200 Postcards" />
      <Header />
      <main className="cs1 ce12">
        <PreOrderNow text="PRE-ORDER NOW" />
      </main>
    </div>
  );
}
