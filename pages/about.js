import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Contact() {
  return (
    <div className="main-container grid about-bg">
      <Metadata title="About" image="/avatar.png" />
      <Header />

      <main className="cs1 ce12">
        <div className="grid about-body">
          <div className="cs1 ce8 sticky">
            <Image src="/avatar1.png" width={1920} height={1920} />
          </div>
          <div className="cs9 ce12 grid">
            <h2 className="cs1 ce12">ABOUT / CONTACT</h2>
            <small className="cs1 ce12">
              Born and raised in Sofia, Bulgaria and always between Amsterdam
              and Sofia. I care for details, colours and emotions by creating
              imagery across lifestyle, landscape, architecture, still life,
              fashion and other brain stuff ツ.
            </small>
            <div className="cs1 ce12">
              <Link
                href="mailto:yngblooods@gmail.com?subject=Let's collaborate"
                className="flex-items-center"
              >
                info@boriskirov.photos
              </Link>
            </div>
            <div className="cs1 ce12">
              <Link
                href="https://www.instagram.com/yng.blds/"
                target="_blank"
                className="flex-items-center"
              >
                Instagram
              </Link>
            </div>
            <div className="cs1 ce12">
              <details closed="true">
                <summary>Features, Mentions & Collaborations: </summary>
                <small>
                  Camera Japan • Dolomite • Ferrino Italy • North Face • #FR2 •
                  That Divine • raredub •The Alchemist • Boldy James • Negative
                  Feed • Art Cage Budapest • EyeShot Magazine • mnfst • Cheetah
                  bikes • The Maker Market • Haarlem City Blog • Atlas Obscura •
                  Upphotographers • instadenbosch • FramePress Magazine • Dutch
                  Analog • Shoot It With Film • 36h studio • Vice • Bored Panda
                </small>
              </details>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
