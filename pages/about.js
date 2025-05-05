import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import SubscribeForm from "../components/subscribe";

export default function Contact() {
  return (
    <div className="main-container grid about-bg">
      <Metadata title="About" image="/avatar.png" />
      <Header />

      <main className="cs1 ce12 blog-container">
        <div className="grid about-body">
          <div className="cs1 ce12">
            <Image src="/avatar1.png" width={1920} height={1920} />
          </div>
          <div className="cs1 ce12 grid">
            <h2 className="cs1 ce12">ABOUT ME</h2>
            <small className="cs1 ce12">
              Born and raised in Sofia, Bulgaria and now living in Amsterdam,
              The Netherlands. I care for details, colours and emotions by
              creating visual imagery & concepts across lifestyle, outdoors,
              fashion, still life and other brain stuff ツ.
            </small>
            <small className="cs1 ce12">
              Photography, writing and active lifestyle like walking, running,
              cycling and tennis. I have been keeping those interests with me
              along the way, and they are now an essential part of my
              personality. After my first 5 years living in Amsterdam, in 2024 I
              self-published my first photobook
              <small className="red">"200 Postcards"</small>, which is now sold
              out, and it will never be republished again.
            </small>
            <small className="cs1 ce12">
              Since 2015 I have been in the world of tech, as a product and
              software designer. Because of my endless curiosity it was
              impossible not to start figuring out how the internet and
              computers work. Now I build my own things. Basically when I want
              something like this website, I just build it from scratch. This
              website runs because of GitHub, NextJS, Vercel, Notion as a
              database, and RSS.
            </small>
            <small className="cs1 ce12">
              I'm also a published writer, but that was between 2012-2014, when
              I was writing short fiction stories and travel essays. Now I'm
              taking low-friction microblogging tumblr looking notes called
              <small className="red">Daynotes</small>. I also post a photo with
              them, to capture and reflect on my own thoughts, feelings and
              experiences. There is also{" "}
              <small className="red">Photo Essays</small> which is my newsletter
              for longer essays around photography, movement and creatitity.
            </small>
            <div className="blog-footer flex flex-column daynotes-wrapper cs1 ce12">
              <small className="cs1 ce12">
                If you like my work, you can subscribe. Daynotes is more
                frequent and short form of a newsletter, while Photo Essays is
                happening every once in a while and is longer.
              </small>
              <SubscribeForm />
            </div>

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
          <div className="cs1 ce12">
            <Link
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-items-center"
            >
              RSS feed
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
