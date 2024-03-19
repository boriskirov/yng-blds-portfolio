import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="main-container grid about-bg">
      <Metadata title="yng.blds" description="Prints for sale" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4 ">
            {/* <Image src="/prints/prints-1.png" width={380} height={270} /> */}
            <Image src="/test.gif" width={380} height={470} />
          </div>
          <div className="cs5 ce12 grid">
            <h2 className="cs2 ce12">
              My Darkroom shop is coming <strong>`mid 2024`</strong>
            </h2>
            <div className="cs2 ce12">
              <Link
                href="https://youngbloods.darkroom.com/"
                className="align-items-center"
                target="_blank"
              >
                <Image
                  src="/darkroom.svg"
                  className="icon"
                  width={16}
                  height={16}
                />
                Visit webshop
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
