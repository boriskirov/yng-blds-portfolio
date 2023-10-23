import Header from "../components/header";
import Metadata from "../components/metadata";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container grid index-bg">
      <Metadata title="yng.blds" description="photography & videography" />
      <div className="grid cs1 ce12">
        <Image
          src="../yng.svg"
          className="yng-svg cs1 ce12"
          width={1920}
          height={600}
        />
      </div>
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12">
            <div className="index-cover"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
