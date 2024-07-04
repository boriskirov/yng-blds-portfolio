import bookOpen from "../public/book-open-grid.png";
import bookOpen2 from "../public/book-open-grid-2.png";
import bookOpen3 from "../public/200-postcards-transparent.png";
import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  return (
    <div>
      <div className="slider">
        <div className="slides">
          <div id="slide-3">
            <div
              className="cover"
              style={{
                backgroundImage: `url(${bookOpen3.src})`,
                backgroundColor: "#ffffffc2",
                backgroundSize: "80% auto",
                padding: "64px",
                width: "100%",
              }}
            ></div>
            <Link
              href="#slide-1"
              style={{
                color: "black",
                fontSize: "42px",
              }}
            >
              ⇀
            </Link>
          </div>
          <div id="slide-1">
            <Link
              href="#slide-3"
              style={{
                color: "black",
                fontSize: "42px",
              }}
            >
              ↼
            </Link>

            <div
              className="inner-cover"
              style={{
                backgroundImage: `url(${bookOpen.src})`,
                backgroundColor: "#ffffffc2",
                backgroundSize: "100%% auto",
                padding: "64px",
                width: "100%",
              }}
            ></div>

            <Link
              href="#slide-2"
              style={{
                color: "black",
                fontSize: "42px",
              }}
            >
              ⇀
            </Link>
          </div>
          <div id="slide-2">
            <Link
              href="#slide-1"
              style={{
                color: "black",
                fontSize: "42px",
              }}
            >
              ↼
            </Link>
            <div
              className="inner-cover"
              style={{
                backgroundImage: `url(${bookOpen2.src})`,
                backgroundColor: "#ffffffc2",
                backgroundSize: "100%% auto",
                padding: "64px",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
