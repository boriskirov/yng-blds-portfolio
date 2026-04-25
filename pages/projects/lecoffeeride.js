import Header from "../../components/header";
import Metadata from "../../components/metadata";
import ProjectHero from "../../components/ProjectHero";
import ProjectInfo from "../../components/ProjectInfo";
import TripleImageGrid from "../../components/TripleImageGrid";
import ProjectFullWidth from "../../components/ProjectFullWidth";
import ProjectContentBlock from "../../components/ProjectContentBlock";
import Link from "next/link";

export default function Lecoffeeride() {
  return (
    <div className="main-container grid project-bg">
      <Metadata
        title="Lecoffeeride | Boris Kirov"
        description="Photography from Lecoffeeride in Ardennes, Belgium"
      />
      <Header />

      <main className="cs1 ce12 project-main-content">
        <ProjectHero
          src="/lecoffeeride/lecoffeehero.jpg"
          alt="Lecoffeeride"
          title="Lecoffeeride"
          subtitle="Ardennes, Belgium 2026"
        />
        <ProjectInfo
          title="Cycling trip"
          description="Founded in the Belgian Ardennes in 2018, Lecoffeeride is a place for cyclists to come together, share stories, and enjoy the simple pleasure of riding."
          text="This was a long weekend experience that was shared between small group of friends who have not met each other, it was friends of friends. We rode through the beautiful Ardennes region, exploring its rolling hills, dense forests, and charming villages. Each day brought new adventures and unforgettable moments on the bike."
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-4.jpg"
          alt="Panoramic view"
        />
        <ProjectContentBlock
          title="Lecoffeeride"
          text="Split in 3 days of riding, we covered between 150-200km in total, with a mix of challenging climbs and scenic routes. The camaraderie and shared love for cycling made this trip truly special, creating memories that will last a lifetime."
          src="/lecoffeeride/lecofferide-6.jpg"
          alt="Cyclist on course"
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square04.jpg", alt: "Cyclist left" },
            { src: "/lecoffeeride/square05.jpg", alt: "Landscape center" },
            { src: "/lecoffeeride/square06.jpg", alt: "Cyclist right" },
          ]}
          caption="The loop to Gilette takes in the Var cycle path, one of the only level stretches of Tarmac in the region – a little bit of flat riding is good for you sometimes! It's nice to pedal out through the valley and then, once fortified, head back through the hills to the seafront, and an easy pedal home."
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square03.jpg", alt: "Cyclist left" },
            { src: "/lecoffeeride/square02.jpg", alt: "Landscape center" },
            { src: "/lecoffeeride/square01.jpg", alt: "Cyclist right" },
          ]}
          caption="The loop to Gilette takes in the Var cycle path, one of the only level stretches of Tarmac in the region – a little bit of flat riding is good for you sometimes! It's nice to pedal out through the valley and then, once fortified, head back through the hills to the seafront, and an easy pedal home."
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-2.jpg"
          alt="Panoramic view"
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square07.jpg", alt: "Cyclist left" },
            { src: "/lecoffeeride/square08.jpg", alt: "Landscape center" },
            { src: "/lecoffeeride/square09.jpg", alt: "Cyclist right" },
          ]}
          caption="The loop to Gilette takes in the Var cycle path, one of the only level stretches of Tarmac in the region – a little bit of flat riding is good for you sometimes! It's nice to pedal out through the valley and then, once fortified, head back through the hills to the seafront, and an easy pedal home."
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-5.jpg"
          alt="Panoramic view"
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-7.jpg"
          alt="Panoramic view"
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-8.jpg"
          alt="Panoramic view"
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square10.jpg", alt: "Cyclist left" },
            { src: "/lecoffeeride/square11.jpg", alt: "Landscape center" },
            { src: "/lecoffeeride/square12.jpg", alt: "Cyclist right" },
          ]}
          caption="The loop to Gilette takes in the Var cycle path, one of the only level stretches of Tarmac in the region – a little bit of flat riding is good for you sometimes! It's nice to pedal out through the valley and then, once fortified, head back through the hills to the seafront, and an easy pedal home."
        />
        <ProjectFullWidth
          src="/lecoffeeride/lecofferide-9.jpg"
          alt="Panoramic view"
        />
        <ProjectContentBlock
          title="The Rides"
          text="Spending three days with only cycling on our mind, and a group of 5 on different levels of endurance and strength we wanted to create a routes that would be enjoyable for everyone, and that would show the best of the region. We rode through the beautiful Ardennes region, exploring its rolling hills, dense forests, and charming villages. Each day brought new adventures and unforgettable moments on the bike. Feel free to get the Komoot routes for each day below:"
          src="/lecoffeeride/lecofferide-3.jpg"
          alt="Cyclist on course"
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square13.png", alt: "Cyclist left" },
            { src: "/lecoffeeride/square14.png", alt: "Landscape center" },
            { src: "/lecoffeeride/square15.png", alt: "Cyclist right" },
          ]}
        />
        <div>
          <p className="komoot-caption">
            If you want to get the routes for the rides, you can find them on
            Komoot here, feel free to explore and ride them yourself! Each route
            offers a unique experience, showcasing the best of the Ardennes
            region and providing a memorable cycling adventure:
          </p>
          <Link
            href="https://www.komoot.com/tour/2891023885"
            target="_blank"
            className="komoot-link"
          >
            Le petite belle route •
          </Link>

          <Link
            href="https://www.komoot.com/tour/2892679090"
            target="_blank"
            className="komoot-link"
          >
            Le petite switchback ride •
          </Link>

          <Link
            href="https://www.komoot.com/tour/2895058586"
            target="_blank"
            className="komoot-link"
          >
            Wanne rondje •
          </Link>
        </div>
      </main>
      <footer className="cs1 ce12">Boris Kirov Photos © 2026</footer>
    </div>
  );
}
