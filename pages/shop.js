import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Link from "next/link";
import PreOrderNow from "../components/pre-order-now";

export default function Shop() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="yng.blds" description="Prints for sale" />
      <Header />
      <main className="cs1 ce12">
        <PreOrderNow text="Book: '200 Postcards' will be available for pre-order soon" />
        <div className="grid">
          <div className="cs1 ce4">
            <Image src="/shop/shop-1.png" width={380} height={470} />
            <h2>Book: 200 Postcards</h2>
            <small>
              <Link href="/200-postcards">Pre-order now</Link>
            </small>
          </div>

          <div className="cs5 ce8">
            <Image src="/shop/shop-2.png" width={380} height={470} />
            <h2>Poster: "Sunset in Centrale Markt"</h2>
            <small>
              <Link href="https://youngbloods.darkroom.com/" target="_blank">
                Buy now
              </Link>
            </small>
          </div>

          <div className="cs9 ce12">
            <Image src="/shop/shop-3.png" width={380} height={470} />
            <h2>Book: "Strapped for time"</h2>
            <small>
              <Link href="/shop">Not available</Link>
            </small>
          </div>
        </div>
      </main>
    </div>
  );
}
