import Image from "next/image";
import Header from "../components/header";

export default function Outdoors() {
  return (
    <div className="main-container grid about-bg">
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <div class="grid-item">
              <Image
                className="card "
                src="/urban/outdoors-1.png"
                width={320}
                height={240}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
