import Link from "next/link";
import Image from "next/image";

import { Atkinson_Hyperlegible } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <header className="grid cs1 ce12 header sticky">
      <div className="cs1 ce12 flex center">
        <Link href="/" className={inter.className}>
          <h1 className="title">BORIS KIROV</h1>
        </Link>
      </div>
      <nav className="cs4 ce9 nav">
        <div href="/about" className="dropdown">
          <button className="dropbtn">Work</button>
          <ul className="dropdown-content">
            <Link href="/urban">Urban</Link>
            <Link href="/people">People</Link>
            <Link href="/outdoors">Outdoors</Link>
            <Link href="/garments">Garments</Link>
            <Link href="/video">Video</Link>
          </ul>
        </div>
        <br />
        <Link href="/shop">Shop</Link>
        <Link href="https://photonotes.substack.com/" target="_blank">
          Blog
        </Link>
        <Link href="./about">About ツ</Link>
      </nav>
    </header>
  );
}
