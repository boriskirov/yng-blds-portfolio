import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Books() {
  return (
    <div className="main-container grid about-bg">
      <Metadata title="yng.blds" description="Prints for sale" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4 ">
            <Image src="/prints/prints-1.png" width={380} height={270} />
          </div>
          <div className="cs5 ce12 grid">
            <p className="cs2 ce12">Coming mid 2024</p>
          </div>
        </div>
      </main>
    </div>
  );
}
