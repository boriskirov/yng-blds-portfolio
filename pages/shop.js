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
        <PreOrderNow
          text="Book: '200 Postcards' will be available for pre-order soon"
          href={"200-postcards"}
        />
        <div className="grid">
          <div className="cs1 ce4">
            <Link href="/200-postcards">
              <Image src="/shop/shop-1.png" width={380} height={470} />
              <h2>Book: 200 Postcards</h2>
              <Link
                href="/200-postcards"
                style={{ color: "rgba(249, 62, 62, 0.76)" }}
              >
                Pre-order now
              </Link>
            </Link>
          </div>

          <div className="cs5 ce8">
            <Link href="https://youngbloods.darkroom.com/" target="_blank">
              <Image src="/shop/shop-2.png" width={380} height={470} />
              <h2>Poster: "Sunset in Centrale Markt"</h2>
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

          <div className="cs9 ce12">
            <Image src="/shop/shop-3.png" width={380} height={470} />
            <h2>Book: "Strapped for time"</h2>
            <small>
              <Link style={{ color: "rgba(116, 116, 116, 0.76)" }} href="/shop">
                Not available
              </Link>
            </small>
          </div>
        </div>
      </main>
    </div>
  );
}
