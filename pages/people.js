import Item from "../components/grid-item";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Link from "next/link";

export default function People() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Life & Portrait Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Link href="/projects/power-of-love-of-power">
              <Item src="/life/life-71.jpg" width={320} height={240} />
            </Link>
            <Item src="/life/life-74.jpg" width={320} height={240} />
            <Item src="/life/life-75.jpg" width={320} height={240} />
            <Item src="/life/life-76.jpg" width={320} height={240} />
            <Item src="/life/life-35.png" width={320} height={240} />
            <Item src="/life/life-68.jpg" width={320} height={240} />
            <Item src="/life/life-38.png" width={320} height={240} />
            <Item src="/life/life-67.png" width={320} height={240} />
            <Item src="/life/life-72.png" width={320} height={240} />
            <Item src="/life/life-40.png" width={320} height={240} />
            <Item src="/life/life-53.png" width={320} height={240} />
            <Item src="/life/life-30.png" width={320} height={240} />
            <Item src="/life/life-69.jpg" width={320} height={240} />
            <Item src="/life/life-61.jpg" width={320} height={240} />
            <Item src="/life/life-56.png" width={320} height={240} />
            <Item src="/life/life-66.png" width={320} height={240} />
            <Item src="/life/life-50.png" width={320} height={240} />
            <Item src="/life/life-33.png" width={320} height={240} />
            <Item src="/life/life-70.jpg" width={320} height={240} />
            <Item src="/life/life-45.png" width={320} height={240} />
            <Item src="/life/life-60.jpg" width={320} height={240} />
            <Item src="/life/life-55.png" width={320} height={240} />
            <Item src="/life/life-1.jpg" width={320} height={240} />
            <Item src="/life/life-58.png" width={320} height={240} />
            <Item src="/life/life-37.jpg" width={320} height={240} />
            <Item src="/life/life-62.jpg" width={320} height={240} />
            <Item src="/life/life-63.jpg" width={320} height={240} />
            <Item src="/life/life-54.png" width={320} height={240} />
            <Item src="/life/life-12.png" width={320} height={240} />
            <Item src="/life/life-64.jpg" width={320} height={240} />
            <Item src="/life/life-59.png" width={320} height={240} />
            <Item src="/life/life-46.png" width={320} height={240} />
            <Item src="/life/life-47.png" width={320} height={240} />
            <Item src="/life/life-36.png" width={320} height={240} />
            <Item src="/life/life-34.png" width={320} height={240} />
            <Item src="/life/life-51.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
