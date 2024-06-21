import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/200-postcards-transparent.png";
import Image from "next/image";
import PreOrderNow from "../components/pre-order-now";
import Link from "next/link";
import Slider from "../components/slider";

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
              <li>212 pages with 130 gr / m² recycled paper</li>
              <li>Crafted and printed in The Netherlands</li>
              <li>Handy format (160mm X 210mm)</li>
            </ul>
            <br />
            <p>Pre-orders are going to be available soon</p>
            <br />
            {/* <h2>€22.00</h2> */}
            <br />
            <Link
              href={"https://forms.gle/1DAkh5AXxZahGTPr9"}
              target="_blank"
              style={{
                padding: "12px 24px",
                fontSize: "20px",
                fontWeight: "normal",
                backgroundColor: "rgba(249, 62, 62, 0.76)",
                color: "f2f2f2",
              }}
            >
              PRE-ORDER{" "}
            </Link>
          </div>
          <div className="cs1 ce12 flex center">
            <Image src="/slider.svg" className="icon" width={24} height={24} />
          </div>
          <div
            className="cs1 ce12"
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
            }}
          >
            <Slider />
          </div>
        </div>
        <PreOrderNow
          text="Available for pre-order soon!"
          href={"https://forms.gle/1DAkh5AXxZahGTPr9"}
          target={"_blank"}
        />
      </main>
    </div>
  );
}
