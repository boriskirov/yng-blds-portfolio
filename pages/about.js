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
              Born and raised in Sofia, Bulgaria and now living in Amsterdam,
              The Netherlands. I care for details, colours and emotions by
              creating visual imagery & concept across lifestyle, outdoors,
              fashion, still life and other brain stuff ツ.
            </small>
            <small className="cs1 ce12">
              I'm also writing almost-daily notes and post a random photo with
              them, as a microblog.
            </small>

            <div className="cs1 ce12">
              <details closed="true">
                <summary>Features, Mentions & Collaborations: </summary>
                <small>
                  • Rapha • MAAP • outside.details • analogue.amsterdam •
                  advanced.research • Wesley Verhoeve • Camera Japan • Dolomite
                  • Ferrino Italy • North Face • #FR2 • That Divine • raredub
                  •The Alchemist • Boldy James • Negative Feed • Art Cage
                  Budapest • EyeShot Magazine • mnfst • Cheetah bikes • The
                  Maker Market • Haarlem City Blog • Atlas Obscura •
                  Upphotographers • instadenbosch • FramePress Magazine • Dutch
                  Analog • Shoot It With Film • 36h studio • Vice • Bored Panda
                </small>
              </details>
            </div>
          </div>
        </div>
        <footer className="flex">
          {" "}
          <div className="cs1 ce12">
            <Link
              href="mailto:info@boriskirov.photos?subject=Let's collaborate"
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
        </footer>
      </main>
    </div>
  );
}
