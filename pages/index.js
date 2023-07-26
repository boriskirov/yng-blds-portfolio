import Header from "../components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container grid index-bg">
      <Header />

      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12">
            <p className="title center">COMING SOON</p>
          </div>
          <div className="cs1 ce12 "></div>
        </div>
      </main>
    </div>
  );
}
