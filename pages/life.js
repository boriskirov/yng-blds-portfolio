import Item from "../components/grid-item";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Life() {
  return (
    <div className="main-container grid about-bg">
      <Metadata />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Item src="/life/life-2.png" width={320} height={240} />

            <Item src="/life/life-3.png" width={320} height={240} />

            <Item src="/life/life-6.png" width={320} height={240} />
            <Item src="/life/life-15.png" width={320} height={240} />
            <Item src="/life/life-13.png" width={320} height={240} />
            <Item src="/life/life-14.png" width={320} height={240} />
            <Item src="/life/life-27.png" width={320} height={240} />
            <Item src="/life/life-5.png" width={320} height={240} />
            <Item src="/life/life-9.png" width={320} height={240} />
            <Item src="/life/life-8.png" width={320} height={240} />
            <Item src="/life/life-7.png" width={320} height={240} />
            <Item src="/life/life-12.png" width={320} height={240} />
            <Item src="/life/life-20.png" width={320} height={240} />
            <Item src="/life/life-1.png" width={320} height={240} />
            <Item src="/life/life-16.png" width={320} height={240} />

            <Item src="/life/life-17.png" width={320} height={240} />
            <Item src="/life/life-18.png" width={320} height={240} />
            <Item src="/life/life-19.png" width={320} height={240} />

            <Item src="/life/life-21.png" width={320} height={240} />
            <Item src="/life/life-22.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
