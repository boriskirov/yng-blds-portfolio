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
      <main className="cs1 ce12">
        <div className="grid">
          <div
            className="cs1 ce7 cover"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          ></div>
          <div className="cs8 ce11">
            <p>
              "200 postcards" is a curated selection of photos taken between
              2019 and 2024. They are meant to showcase the importance of family
              and friends, the connection we always have with them.
            </p>
            <br />
            <ul>
              <li>212 pages with 120gr recycled paper</li>
              <li>Crafted and printed in The Netherlands</li>
              <li>Handy format (160mm X 210mm)</li>
            </ul>
            <br />
            <p>Pre-orders are going to be available soon</p>
            <br />
            <h2>€22.00</h2>
            <br />
            <button
              disabled
              style={{
                padding: "12px 24px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Pre-order
            </button>
          </div>
          <div
            className="cs1 ce12 cover"
            style={{
              backgroundImage: `url(${bookOpen.src})`,
              backgroundColor: "#ffffffc2",
              padding: "64px",
              backgroundSize: "120%",
            }}
          ></div>
        </div>
        <PreOrderNow text="Available for pre-order soon!" />
      </main>
    </div>
  );
}
