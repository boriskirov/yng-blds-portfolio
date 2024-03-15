import Image from "next/image";
import Header from "../components/header";
import Item from "../components/grid-item";
import Metadata from "../components/metadata";

export default function Garments() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="yng.blds"
        description="Apparel and Clothing Photography"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <Item src="/garments/garments-47.jpg" width={320} height={240} />
            <Item src="/garments/garments-22.png" width={320} height={240} />
            <Item src="/garments/garments-5.png" width={320} height={240} />

            <Item src="/garments/garments-27.gif" width={320} height={240} />
            <Item src="/garments/garments-4.png" width={320} height={240} />
            <Item src="/garments/garments-3.png" width={320} height={240} />
            <Item src="/garments/garments-16.png" width={320} height={240} />
            <Item src="/garments/garments-15.png" width={320} height={240} />
            <Item src="/garments/garments-26.png" width={320} height={240} />
            <Item src="/garments/garments-9.png" width={320} height={240} />
            <Item src="/garments/garments-11.png" width={320} height={240} />
            <Item src="/garments/garments-12.png" width={320} height={240} />
            <Item src="/garments/garments-13.png" width={320} height={240} />
            <Item src="/garments/garments-43.png" width={320} height={240} />
            <Item src="/garments/garments-36.png" width={320} height={240} />
            <Item src="/garments/garments-23.png" width={320} height={240} />
            <Item src="/garments/garments-17.png" width={320} height={240} />
            <Item src="/garments/garments-18.png" width={320} height={240} />
            <Item src="/garments/garments-33.png" width={320} height={240} />
            <Item src="/garments/garments-42.png" width={320} height={240} />
            <Item src="/garments/garments-46.jpg" width={320} height={240} />
            <Item src="/garments/garments-24.png" width={320} height={240} />
            <Item src="/garments/garments-21.png" width={320} height={240} />
            <Item src="/garments/garments-29.png" width={320} height={240} />
            <Item src="/garments/garments-37.png" width={320} height={240} />
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
