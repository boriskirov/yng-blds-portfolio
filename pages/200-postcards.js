import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/photo-book-loop.gif";
import Image from "next/image";
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
              "200 Postcards" is a curated selection of photographs taken
              between 2019-2024 from different places. Every image in the book
              is playing a role of a postcard, that you might send to your
              closest friends and family. Relying on social media doesn’t always
              bridge the gap that time creates between us, so this book is
              trying to fight that. All photographs are created to be shared,
              because every memory is more valuable when shared.
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
              <li>Custom designed postage and ink stamped</li>
              <li>Crafted and printed in Amsterdam, The Netherlands</li>
            </ul>
            <br />

            <h1>€35.00</h1>
            <br />
            <Link
              href={"/200-postcards"}
              target="_blank"
              style={{
                padding: "12px 24px",
                fontSize: "20px",
                fontWeight: "normal",
                backgroundColor: "rgba(249, 62, 62, 0.76)",
                color: "f2f2f2",
              }}
            >
              Sold out{" "}
            </Link>
            <br />
            <br />
            <small>
              * By signing up, it means you want to order and purchase my book.
              Free delivery in Amsterdam, the rest of the world shipping costs
              are excluded.
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
        {/* <PreOrderNow
          text="2 books left, available for order."
          href={"https://forms.gle/1DAkh5AXxZahGTPr9"}
          target={"_blank"}
        /> */}
      </main>
    </div>
  );
}
