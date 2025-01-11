import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Link from "next/link";
import PreOrderNow from "../components/pre-order-now";

export default function Shop() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="Shop" description="Shop" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce3">
            <Link href="/shop">
              <div className="image-wrapper">
                <Image
                  src="/shop/shop-5.png"
                  width={380}
                  height={470}
                  className="shop-image"
                />
              </div>
              <small>Preset</small>
              <h2>"Vibrant Daylight"</h2>
              <small>
                <Link
                  style={{ color: "rgba(116, 116, 116, 0.76)" }}
                  href="/shop"
                >
                  Coming soon
                </Link>
              </small>
            </Link>
          </div>
          <div className="cs4 ce6">
            <Link href="/shop">
              <div className="image-wrapper">
                <Image
                  src="/shop/shop-4.png"
                  width={380}
                  height={470}
                  className="shop-image"
                />
              </div>
              <small>Preset</small>
              <h2>"Punchy Haze"</h2>
              <small>
                <Link
                  style={{ color: "rgba(116, 116, 116, 0.76)" }}
                  href="/shop"
                >
                  Coming soon
                </Link>
              </small>
            </Link>
          </div>
          <div className="cs7 ce9">
            <Link href="/200-postcards">
              <div className="image-wrapper">
                <Image
                  src="/shop/shop-1.png"
                  width={380}
                  height={470}
                  className="shop-image"
                />
              </div>
              <small>Preset</small>
              <h2>200 Postcards</h2>
              <div className="flex space-between">
                <Link
                  href="/200-postcards"
                  style={{ color: "rgba(249, 62, 62, 0.76)" }}
                >
                  Sold out
                </Link>
              </div>
            </Link>
          </div>
          <div className="cs10 ce12">
            <Link href="https://youngbloods.darkroom.com/" target="_blank">
              <div className="image-wrapper">
                <Image
                  src="/shop/shop-2.png"
                  width={380}
                  height={470}
                  className="shop-image"
                />
              </div>
              <small>Poster</small>
              <h2>"Sunset in Centrale Markt"</h2>
              <small>
                <Link
                  href="https://youngbloods.darkroom.com/"
                  target="_blank"
                  style={{ color: "rgba(249, 62, 62, 0.76)" }}
                >
                  Buy now
                </Link>
              </small>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
