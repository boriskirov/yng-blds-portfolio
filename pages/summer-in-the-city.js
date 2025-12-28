import Header from "../components/header";
import Metadata from "../components/metadata";
import backgroundImage from "../public/smtc-1.png";
import Image from "next/image";
import PreOrderNow from "../components/pre-order-now";
import Link from "next/link";
import Slider from "../components/slider";
import Item from "../components/grid-item";

export default function TwoHundredPostcards() {
  return (
    <div className="main-container grid">
      <Metadata
        title="Summer in the city"
        description="Celebrating the 750th birthday of Amsterdam"
        image="/summer-in-the-city-meta.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div
            className="cs1 ce6 shop-cover"
            loop="infinite"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "90% auto",
            }}
          ></div>
          <div className="cs8 ce11">
            <h2>SUMMER IN THE CITY</h2>
            <small>Amsterdam’s 750th trip around the sun</small>
            <br />
            <br />
            <p>
              It begins slowly with spring lingering, until the warmth catches
              up and the sky turns to a perfect blue. Just two minutes a day,
              little by little, the sun stretches its departure, building
              anticipation for what’s to come: Summer season in Amsterdam. When
              it finally arrives and the days grow longer, you feel
              lighter — not from wearing fewer clothes, but because of your
              spirit rising, that thing in your chest becoming bigger, lifting
              you up. You inhale the warmth, the plans, the friends, the walks,
              the bike rides, the canal-side conversations, the new faces, the
              picnics and barbecues, the outdoor activities, the sunsets— and
              exhale hopes, dreams, and endless possibilities. So much can
              happen in a day. And for 93 days, we get to live Summer in the
              City.
            </p>
            <br />
            <ul>
              <li>Design & photography @boriskirovv & @nuno_das_fotos</li>
              <li>Foreword by @kaliyaa</li>
              <li>Printed by @terry.bleu </li>
              <li>Stamp by @posthumuswinkel</li>
            </ul>
            <br />

            <h1>€17.50</h1>
            <br />
            <Link
              href={"mailto:info@boriskirov.photos"}
              target="_blank"
              style={{
                padding: "12px 24px",
                fontSize: "20px",
                fontWeight: "normal",

                backgroundColor: "rgba(249, 62, 62, 0.76)",
                color: "f2f2f2",
              }}
            >
              Email me{" "}
            </Link>
            <Link
              href={"https://summer-in-the-city.vercel.app/"}
              target="_blank"
              style={{
                padding: "12px 24px",
                marginLeft: "12px",
                fontSize: "20px",
                fontWeight: "normal",
                backgroundColor: "rgba(249, 62, 62, 0.16)",
                color: "f2f2f2",
              }}
            >
              Go to website{" "}
            </Link>
            <br />
            <br />
            <small>* Feel free to reach out if you want a zine</small>
          </div>{" "}
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <div className="cs1 ce12">
            <Item src="/sitc/sitc02.jpg" width={320} height={240} />
          </div>
          <div className="cs1 ce6">
            <Item src="/sitc/sitc03.jpg" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/sitc/sitc04.jpg" width={320} height={240} />
          </div>
          <div className="cs1 ce6">
            <Item src="/sitc/sitc05.jpg" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/sitc/sitc06.jpg" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
