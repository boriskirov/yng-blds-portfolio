import Link from "next/link";

export default function Header({ header = true }) {
  return (
    <header
      className={`cs1 ce12 flex space-between sticky ${header ? "header" : ""}`}
    >
      <div className="cs1 ce12 flex center">
        <Link href="/">
          <h1 className="title">BORIS KIROV</h1>
        </Link>
      </div>

      <nav className="cs4 ce9 nav">
        <div href="/about" className="dropdown">
          <button className="dropbtn">Work</button>
          <ul className="dropdown-content">
            <Link href="/people">People</Link>
            <Link href="/outdoors">Outdoors</Link>
            <Link href="/garments">Garments</Link>
            <Link href="/video">Video</Link>
          </ul>
        </div>

        <Link href="/shop">Shop</Link>
        <Link href="./about">About ツ</Link>
      </nav>
    </header>
  );
}
