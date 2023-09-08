import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Contact() {
  return (
    <div className="main-container grid about-bg">
      <Metadata />
      <Header />

      <main className="cs1 ce12">
        <div className="grid about-body">
          <div className="cs1 ce4 sticky">
            <Image src="/avatar.png" width={380} height={270} />
          </div>
          <div className="cs5 ce10 grid">
            <p className="cs2 ce12">
              Hey, I’m Boris Kirov / yng.blds [young bloods] - a designer and
              mixed-media artist currently based out of Amsterdam, The
              Netherlands. <br />
            </p>
            <p className="cs2 ce12">
              <br />
              My work is situated somewhere between photography, videography and
              designing. I've been involved in the creative business for more
              than 10 years. Specializing in, but not limited to campaign
              shooting, event coverage, automotive, travel and portraiture
              photography and videography and other brain stuff. I'm available
              for booking wordwide.
            </p>
            <p className="cs2 ce12">
              <br />
              📨 Reach out for collaborations via:
            </p>
            <div className="flex cs2 ce12">
              <Link href="https://www.instagram.com/yng.blds/" target="_blank">
                <Image
                  src="/instagram.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="mailto:yngblooods@gmail.com?subject=Let's collaborate">
                <Image
                  src="/mail.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://bento.me/yngblds">
                <Image
                  src="/bento.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
