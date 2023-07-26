import Image from "next/image";
import Header from "../components/header";

export default function Books() {
  return (
    <div className="main-container grid about-bg">
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4 sticky">
            <Image src="/prints/prints-1.png" width={380} height={270} />
          </div>
          <div className="cs5 ce12 grid">
            <p className="cs2 ce12">Coming early winter 2023</p>
          </div>
        </div>
      </main>
    </div>
  );
}
