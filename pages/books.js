import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Books() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="yng.blds" description="Photo books" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4">
            <Image
              src="/strapped-for-time-cover.png"
              width={380}
              height={270}
            />
          </div>
          <div className="cs5 ce12 grid">
            <div className="cs2 ce12">
              <h2>STRAPPED FOR TIME</h2>
              <h2 className="italic yellow">時間に追われている</h2>
            </div>
            <p className="cs2 ce12">
              This small monograph is Boris’s trial to express his creativity
              and love for photography. All pictures in “Strapped for time,
              Freestyle walks in Japan” are a result of a the long-waited
              journey to Japan. The publication is a representation of the
              feeling of not having enough time and getting lost with complete
              understanding of time simultaneously.
            </p>
            <p className="cs2 ce12">Coming late winter 2025</p>
          </div>
        </div>
      </main>
    </div>
  );
}
