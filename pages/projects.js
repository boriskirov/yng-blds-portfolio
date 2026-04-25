import Image from "next/image";
import Header from "../components/header";
import Metadata from "../components/metadata";
import ProjectLink from "../components/project-link";

export default function Projects() {
  return (
    <div className="main-container grid index-bg cover">
      <Metadata title="Boris Kirov" description="Photo books" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce3">
            <ProjectLink
              id="lecoffeeride"
              src="/lecoffeeride/lecofferide-1.png"
              alt="Lecoffeeride"
              width={320}
              height={240}
              title="Lecoffeeride"
              description="Ardennes 2026 - cycling tour"
              cta="Explore"
              icon="/explore.svg"
            />
          </div>
          <div className="cs4 ce6">
            <ProjectLink
              id="/"
              src="/uci-2026/uci-1.png"
              alt="UCI World Championships 2026"
              width={320}
              height={240}
              title="UCI World Championships"
              description="Zonhoven, Belgium 2026"
              cta="View"
              icon="/view.svg"
            />
          </div>
          <div className="cs7 ce9">
            <ProjectLink
              id="power-of-love-of-power"
              src="/polop/polop-1.png"
              alt="Power of Love & Love of Power"
              width={320}
              height={240}
              title="Power of Love & Love of Power"
              description="Contemporary Dance Performance"
              cta="Discover"
              icon="/discover.svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
