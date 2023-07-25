import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";

export default function Books() {
  return (
    <div className="main-container grid about-bg">
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4 sticky">
            <Image src="/strapped-for-time.png" width={380} height={270} />
          </div>
          <div className="cs5 ce12 grid">
            <h2 className="cs2 ce12">
              Strapped for something /stræpt fɔːr ˈsʌm.θɪŋ /
              <br />
              何かに縛られている：何かが欠けている
            </h2>
            <p className="cs2 ce12">
              This small monograph is Boris’s trial to express his creativity
              and love for photography. All pictures in “Strapped for time” are
              a result of a the long-waited journey to Japan. The publication is
              a representation of the feeling of not having enough time and
              getting lost with complete understanding of time simultaneously.
            </p>
            <p className="cs2 ce12">Coming early winter 2023</p>
          </div>
        </div>
      </main>
    </div>
  );
}
