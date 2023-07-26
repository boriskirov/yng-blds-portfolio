import Item from "../components/grid-item";
import Header from "../components/header";

export default function Urban() {
  return (
    <div className="main-container grid about-bg">
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Item src="/urban/urban-3.png" width={320} height={240} />
            <Item src="/urban/urban-4.png" width={320} height={240} />
            <Item src="/urban/urban-5.png" width={320} height={240} />

            <Item src="/urban/urban-10.png" width={320} height={240} />
            <Item src="/urban/urban-6.png" width={320} height={240} />
            <Item src="/urban/urban-9.png" width={320} height={240} />

            <Item src="/urban/urban-7.png" width={320} height={240} />
            <Item src="/urban/urban-8.png" width={320} height={240} />
            <Item src="/urban/urban-11.png" width={320} height={240} />
            <Item src="/urban/urban-12.png" width={320} height={240} />
            <Item src="/urban/urban-13.png" width={320} height={240} />
            <Item src="/urban/urban-14.png" width={320} height={240} />
            <Item src="/urban/urban-15.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
