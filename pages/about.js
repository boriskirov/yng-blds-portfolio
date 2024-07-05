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
          <div className="cs2 ce6 sticky">
            <Image src="/avatar1.png" width={322} height={334} />
          </div>
          <div className="cs7 ce11 grid">
            <h2 className="cs1 ce12">
              Born and raised in Sofia, Bulgaria and always between Amsterdam
              and Sofia. I care for details, colours and emotions by creating
              imagery across lifestyle, landscape, architecture, still life,
              fashion and other brain stuff ツ.
            </h2>
            <div className="flex cs1 ce12">
              <Link
                href="https://www.instagram.com/yng.blds/"
                target="_blank"
                className="flex-items-center"
              >
                <Image
                  src="/instagram.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="mailto:yngblooods@gmail.com?subject=Let's collaborate"
                className="flex-items-center"
              >
                <Image
                  src="/mail.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://bento.me/yngblds"
                className="flex-items-center"
                target="_blank"
              >
                <Image
                  src="/bento.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://bento.me/yngblds"
                className="flex-items-center"
                target="_blank"
              >
                <Image
                  src="/darkroom.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://bento.me/yngblds"
                className="flex-items-center"
                target="_blank"
              >
                <Image
                  src="/substack.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="cs7 ce11">
            <details open>
              <summary>Features & Mentions: </summary>
              <ul className="features-mentions">
                <li>Art Cage Budapest</li>
                <li>EyeShot Magazine</li>
                <li>mnfst</li>
                <li>Cheetah bikes</li>
                <li>The Maker Market</li>
                <li>Haarlem City Blog</li>
                <li>Atlas Obscura</li>
                <li>Upphotographers</li>
                <li>instadenbosch</li>
                <li>FramePress Magazine</li>
                <li>Dutch Analog</li>
                <li>Shoot It With Film</li>
                <li>The Film Public</li>
                <li>36h_studio</li>
                <li>Vice</li>
                <li>Bored Panda</li>
              </ul>
            </details>
          </div>
        </div>
      </main>
    </div>
  );
}
