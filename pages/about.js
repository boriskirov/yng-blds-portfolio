import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import { PT_Serif } from "@next/font/google";

const PtSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

export default function Contact() {
  return (
    <div className="main-container grid about-bg">
      <Metadata />
      <Header />

      <main className="cs1 ce12">
        <div className="grid about-body">
          <div className="cs1 ce12 ">
            <h1 className={PtSerif.className}>
              Hi there, I’m Boris ツ / yng.blds [young bloods] - <br />A
              designer and photographer based between Amsterdam, The Netherlands
              and Sofia, Bulgaria.
            </h1>{" "}
            <br />
            <h2 className={PtSerif.className}>
              * Available for freelance work and open to travel.
            </h2>
          </div>
          <div className="cs1 ce4 sticky">
            <Image src="/avatar1.png" width={322} height={334} />
          </div>
          <div className="cs5 ce12 grid">
            <h2 className="cs1 ce12">
              My work is situated somewhere between photography, videography and
              design. I've been involved in the creative business for more than
              10 years. With an educational background in Economics and
              Advertising I can always understand when to lean on the creative
              and when on the practical side of any project, so we can move
              forward.
              <br />
              Specializing in, but not limited to campaign shooting, event
              coverage, automotive, travel and portraiture photography and
              videography, and other brain stuff ツ.
            </h2>
            <div className="flex cs1 ce12 flex-column">
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
                <h2>Instagram</h2>
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
                <h2>Email me</h2>
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
                <h2>Bento</h2>
              </Link>
            </div>
          </div>
          <div className="cs5 ce12">
            <details open>
              <summary>Features & Mentions: </summary>
              <ul>
                <li>Upphotographers</li>
                <li>instadenbosch</li>
                <li>FramePress Magazine</li>
                <li>Dutch Analog</li>
                <li>Shoot It With Film</li>
                <li>The Film Public</li>
                <li>36h_studio</li>
                <li>Vice</li>
              </ul>
            </details>
          </div>
        </div>
      </main>
    </div>
  );
}
