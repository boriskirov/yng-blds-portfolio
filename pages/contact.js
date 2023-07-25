import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";

export default function Contact() {
  return (
    <div className="main-container grid about-bg">
      <Header />

      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce4 sticky">
            <Image src="/avatar.png" width={380} height={270} />
          </div>
          <div className="cs5 ce12 grid">
            <p className="cs2 ce12">
              Hey, I’m Boris - a mixed-media artist based out of Amsterdam, The
              Netherlands. I work with photo 🎞️ | video 🎥 | mixed media 🤖.
              <br />i always have a camera
            </p>
            <p className="cs2 ce12">
              <br />
              I've been doing photography, videography and mixed media for 10
              years. As a mixed media specialiast I've worked with different
              clients to execute unique and interesting projects for products,
              events, services and travel destinations. Worked with clients
              like: FITC Amsterdam, Tea House Sofia, Despark and many others.
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
              <Link href="mailto:sboriskirov@gmail.com?subject=Hello">
                <Image
                  src="/mail.svg"
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
