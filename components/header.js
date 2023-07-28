import Link from "next/link";

export default function Header() {
  return (
    <header className="grid cs1 ce12 header sticky">
      <div className="cs1 ce7 flex">
        <h5 className="name">
          <Link href="/">YNG.BLDS</Link>
        </h5>
      </div>
      <nav className="cs10 ce12 nav">
        <div href="/about" className="dropdown">
          <button className="dropbtn">Work</button>
          <ul className="dropdown-content">
            <Link href="/outdoors">Outdoors</Link>
            <Link href="/urban">Urban</Link>
            <Link href="/garments">Garments</Link>
            <Link href="/life">Life</Link>
          </ul>
        </div>
        <br />
        <Link href="/prints">Prints</Link>
        <Link href="/books">Books</Link>
        <Link href="./about">About</Link>
      </nav>
    </header>
  );
}
