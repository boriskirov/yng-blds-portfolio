import Header from "../components/header";
import Metadata from "../components/metadata";
import PreOrderNow from "../components/pre-order-now";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <div>
      <Metadata
        title="Boris Kirov"
        description="Photography & videography"
        image="/avatar.png"
      />
      <Header header={false} />
      <Tilt
        style={{ zIndex: "-1" }}
        tiltMaxAngleX={1.15}
        tiltMaxAngleY={1.15}
        scale={1.01}
      >
        <div className="main-container grid index-cover cover-main">
          <main className="cs1 ce12"></main>
        </div>
      </Tilt>
    </div>
  );
}
