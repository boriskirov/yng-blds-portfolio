import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="Shop" description="Shop" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <Link href="/summer-in-the-city" className="cs1 ce3">
            <div className="image-wrapper">
              <Image
                src="/shop/shop-6.png"
                width={380}
                height={470}
                className="shop-image"
              />
            </div>
            <small>Zine</small>
            <h2>Summer in the city</h2>
            <small className="cs1 ce3">Coming soon</small>
          </Link>

          <Link href="/shop" className="cs4 ce6">
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
            <small href="/shop" className="cs1 ce3">
              Coming soon
            </small>
          </Link>

          <Link href="/shop" className="cs7 ce9">
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
            <small className="cs1 ce3">Coming soon</small>
          </Link>

          <Link href="/200-postcards" className="cs10 ce12">
            <div className="image-wrapper">
              <Image
                src="/shop/shop-1.png"
                width={380}
                height={470}
                className="shop-image"
              />
            </div>
            <small>Preset</small>
            <h2>"200 Postcards"</h2>
            <small className="cs1 ce3">Sold out</small>
          </Link>

          <Link
            href="https://youngbloods.darkroom.com/"
            target="_blank"
            className="cs1 ce3"
          >
            <div className="image-wrapper">
              <Image
                src="/shop/shop-2.png"
                width={380}
                height={470}
                className="shop-image"
              />
            </div>
            <small>Preset</small>
            <h2>"Sunset in Centrale Markt"</h2>
            <small className="cs1 ce3">Coming soon</small>
          </Link>
        </div>
      </main>
    </div>
  );
}
