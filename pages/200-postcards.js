import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/photo-book-loop.gif";
import Image from "next/image";
import PreOrderNow from "../components/pre-order-now";
import Link from "next/link";
import Slider from "../components/slider";

export default function TwoHundredPostcards() {
  return (
    <div className="main-container grid">
      <Metadata
        title="200 Postcards"
        description="200 Postcards photobook by Boris Kirov"
        image="/200-post-meta.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div
            className="cs1 ce6 shop-cover"
            loop="infinite"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          ></div>
          <div className="cs8 ce11">
            <p>
              "200 postcards" is a curated selection of photos taken between
              2019-2024. In this book you will find 200 images taken after
              moving abroad and looking for ways how to stay connected to your
              friends, family and roots.
            </p>
            <br />
            <ul>
              <li>
                {" "}
                Sewn with bare spine in Swiss softcover Munken Lynx Rough 300
                gr/ m² cover
              </li>
              <li>
                212 pages with Munken Lynx Rough 120 gr/ m² recycled paper
              </li>
              <li>Coffee table format (160 x 230 mm)</li>
              <li>Crafted and printed in Amsterdam, The Netherlands</li>
            </ul>
            {/* <br />
            <p>Pre-orders are available soon</p> */}
            <br />
            <h2>€35.00</h2>
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
            <br />
            <br />
            <small>
              By signing up, it means you want to pre-order and purchase my
              book.
            </small>
          </div>
          <div className="cs1 ce12 flex center" style={{ marginTop: "24px" }}>
            <Image
              src="/slider.svg"
              alt="slider"
              className="icon"
              width={24}
              height={24}
            />
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
          text="Available for pre-order now!"
          href={"https://forms.gle/1DAkh5AXxZahGTPr9"}
          target={"_blank"}
        />
      </main>
    </div>
  );
}
