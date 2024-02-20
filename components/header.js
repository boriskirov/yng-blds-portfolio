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
      <div className="cs1 ce7 flex">
        <Link href="/" className={inter.className}>
          <Image
            src="/logo-empty.svg"
            className="logo"
            width={65}
            height={27}
          />
        </Link>
      </div>
      <nav className="cs9 ce12 nav">
        <div href="/about" className="dropdown">
          <button className="dropbtn">Work</button>
          <ul className="dropdown-content">
            <Link href="/outdoors">Outdoors</Link>
            <Link href="/urban">Urban</Link>
            <Link href="/garments">Garments</Link>
            <Link href="/people">People</Link>
            <Link href="/video">Video</Link>
          </ul>
        </div>
        <br />
        <Link href="/prints">Prints</Link>
        <Link href="/books">Books</Link>
        <Link href="./about">About / Say Hello ツ</Link>
      </nav>
    </header>
  );
}
