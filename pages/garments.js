import Image from "next/image";
import Header from "../components/header";
import Item from "../components/grid-item";
import Metadata from "../components/metadata";

export default function Garments() {
  return (
    <div className="main-container grid about-bg">
      <Metadata />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-1.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-5.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-2.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-4.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-3.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-16.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-15.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-8.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-9.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-10.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-11.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-12.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-13.png"
                width={320}
                height={240}
              />
            </div>
            <div className="grid-item">
              <Image
                className="card "
                src="/garments/garments-14.png"
                width={320}
                height={240}
              />
            </div>
            <Item src="/garments/garments-17.png" width={320} height={240} />
            <Item src="/garments/garments-18.png" width={320} height={240} />
            <Item src="/garments/garments-19.png" width={320} height={240} />
            <Item src="/garments/garments-20.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
