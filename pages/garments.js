import Header from "../components/header";
import Item from "../components/grid-item";
import Metadata from "../components/metadata";

export default function Garments() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Apparel and Clothing Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Item src="/garments/garments-4.jpg" width={320} height={240} />

            <Item src="/garments/garments-22.jpg" width={320} height={240} />
            <Item src="/garments/garments-26.png" width={320} height={240} />
            <Item src="/garments/garments-5.png" width={320} height={240} />
            <Item src="/garments/garments-45.png" width={320} height={240} />
            <Item src="/garments/garments-27.gif" width={320} height={240} />
            <Item src="/garments/garments-56.png" width={320} height={240} />
            <Item src="/garments/garments-3.png" width={320} height={240} />
            <Item src="/garments/garments-15.png" width={320} height={240} />
            <Item src="/garments/garments-57.png" width={320} height={240} />
            <Item src="/garments/garments-52.png" width={320} height={240} />
            <Item src="/garments/garments-53.png" width={320} height={240} />
            <Item src="/garments/garments-50.jpg" width={320} height={240} />
            <Item src="/garments/garments-49.jpg" width={320} height={240} />
            <Item src="/garments/garments-54.png" width={320} height={240} />
            <Item src="/garments/garments-55.png" width={320} height={240} />
            <Item src="/garments/garments-11.png" width={320} height={240} />
            <Item src="/garments/garments-12.png" width={320} height={240} />
            <Item src="/garments/garments-48.jpg" width={320} height={240} />
            <Item src="/garments/garments-43.png" width={320} height={240} />
            <Item src="/garments/garments-58.png" width={320} height={240} />
            <Item src="/garments/garments-59.png" width={320} height={240} />
            <Item src="/garments/garments-42.png" width={320} height={240} />
            <Item src="/garments/garments-46.jpg" width={320} height={240} />
            <Item src="/garments/garments-9.jpg" width={320} height={240} />
            <Item src="/garments/garments-51.jpg" width={320} height={240} />
            <Item src="/garments/garments-29.jpg" width={320} height={240} />
            <Item src="/garments/garments-38.png" width={320} height={240} />
            <Item src="/garments/garments-39.png" width={320} height={240} />
            <Item src="/garments/garments-40.png" width={320} height={240} />
            <Item src="/garments/garments-41.png" width={320} height={240} />
            <Item src="/garments/garments-44.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
