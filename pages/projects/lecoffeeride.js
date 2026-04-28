import Header from "../../components/header";
import Metadata from "../../components/metadata";
import ProjectHero from "../../components/ProjectHero";
import ProjectInfo from "../../components/ProjectInfo";
import TripleImageGrid from "../../components/TripleImageGrid";
import ProjectFullWidth from "../../components/ProjectFullWidth";
import ProjectContentBlock from "../../components/ProjectContentBlock";
import StickyLikeBar from "../../components/StickyLikeBar";
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
        />
        <TripleImageGrid
          images={[
            { src: "/lecoffeeride/square03.jpg", alt: "Cyclist left" },
            { src: "/lecoffeeride/square02.jpg", alt: "Landscape center" },
            { src: "/lecoffeeride/square01.jpg", alt: "Cyclist right" },
          ]}
          caption="Every cycling event is a great opportunity to experiemnt with my photography. I appreciate dynamic shot-taking, investigating for an interesting and exciting compositions that I see in front but also imaging what's behind me. What I would often do is, use my strap as an achnor to place the camera with one hand below my armpid and my body to level the composition. That's how I capture what's behind me, while still looking forward for what's ahead. I would often take images while riding with 30km/h. In this project I picked 2 images that I took while riding, with that same technique. I will let you guess which are taken like that."
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
          caption="It's normal to have your own goals and aspirations. It's also normal to face challenges you set for yourself. But from time to time, we just need to step back and enjoy the journey, a journey which you can share with a few friends."
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
          caption="The first semi-intense cycling experience for me since my injury in 2025, excatly an year later I wanted to test my body and my mind. After suffering for months from an protrusion on my L5-S1 spinal disc, cycling was something I was doubting at some point in the peak of my pain. But I stayed determined, positive and focused on my recovery. Big kudos to my physiotherapist, Michiel and Sander, who helped me bring believe in my body, and guided me to become stronger. "
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

        <details
          style={{
            backgroundColor: "#f5f5f520",
            padding: "16px",
            borderRadius: "2px",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              margin: "8px 0",
            }}
            className="project-subsection-title"
          >
            Get the komoot routes
          </summary>
          <div className="flex" style={{ flexDirection: "row", gap: "1rem" }}>
            <iframe
              src="https://www.komoot.com/tour/2895058586/embed?share_token=aKL1Iwx6m4uGmKMRFvW2XylYGXkVfepf77Yca8L3ILsbU4UOmS&profile=1"
              width="100%"
              height="700"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <iframe
              src="https://www.komoot.com/tour/2892679090/embed?share_token=aFsDj5KEQoQ96XJUWKp4RUCQt5WCWgrpLx6rVsf25kUMltWl5P&profile=1"
              width="100%"
              height="700"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <iframe
              src="https://www.komoot.com/tour/2891023885/embed?share_token=aiyQ3k5EjZdWpLvGKg3b8F7ADFK8VAv1W7VYacrqWLsliMQtbV&profile=1"
              width="100%"
              height="700"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </details>

        <StickyLikeBar
          pageId="lecoffeeride"
          message="Like what you see? Show some love, that way I can keep creating."
        />
      </main>
      <footer
        className="cs1 ce12"
        style={{
          padding: "2.5rem 0",
        }}
      >
        Boris Kirov Photos © 2026
      </footer>
    </div>
  );
}
