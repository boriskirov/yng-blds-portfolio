import bookOpen from "../public/book-open-grid.png";
import bookOpen2 from "../public/book-open-grid-2.png";
import bookOpen3 from "../public/book-open-grid-3.png";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slides">
        <div id="slide-3">
          {" "}
          <div
            className="cover"
            style={{
              backgroundImage: `url(${bookOpen3.src})`,
              backgroundColor: "#ffffffc2",
              backgroundSize: "120% auto",
              padding: "64px",
              width: "100%",
            }}
          ></div>
        </div>
        <div id="slide-1">
          <div
            className="cover"
            style={{
              backgroundImage: `url(${bookOpen.src})`,
              backgroundColor: "#ffffffc2",
              backgroundSize: "120% auto",
              padding: "64px",
              width: "100%",
            }}
          ></div>
        </div>
        <div id="slide-2">
          {" "}
          <div
            className="cover"
            style={{
              backgroundImage: `url(${bookOpen2.src})`,
              backgroundColor: "#ffffffc2",
              backgroundSize: "120% auto",
              padding: "64px",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
