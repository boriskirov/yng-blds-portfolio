import Item from "../components/grid-item";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Outdoors() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Outdoors & Nature Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Item src="/outdoors/outdoors-3.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-19.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-1.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-14.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-2.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-26.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-4.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-5.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-18.png" width={320} height={240} />

            <Item src="/outdoors/outdoors-6.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-7.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-8.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-27.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-28.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-29.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-30.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-16.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-11.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-12.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-25.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-15.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-17.png" width={320} height={240} />
            <Item src="/outdoors/outdoors-24.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
