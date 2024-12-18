import Item from "../../components/grid-item";
import Header from "../../components/header";
import Metadata from "../../components/metadata";
import Link from "next/link";
import VideoPlayer from "../../components/video-item";

export default function PowerOfLoveOfPower() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Life & Portrait Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs2 ce11">
        <div className="grid">
          <small className="cs1 ce4">Power of Love & Love of Power</small>
          <br />
          <h2 className="cs1 ce9 ">
            Photography, Videography & Graphic Design for Svetlin Travis's
            contemporary dance performance "Power of Love & Love of Power"
          </h2>

          <div className="cs1 ce5">
            <small>Concept & choreography: Svetlin Travis </small>
            <br />
            <small>
              {" "}
              Music: Stan Genadiev @stanislav_genadiev , Gunnar Gunnsteinsson
              @gunngunn123{" "}
            </small>
            <br />
            <small>Costum design: Magdalena Urbanik @madurbanfashion </small>
            <br />
            <small>Lightning: Andy Krijgsman</small>
            <br />
            <small>
              Performers: Giulia Cenni @giulia_cenni , Uri Eugenio @urieugenio
            </small>
            <br />
            <small>Production assistant: Sara Ramos @sara_o.0_111 </small>
            <br />
            <small>
              Photography: Richard Beukelaar @richard_beukelaar_photography ,
              Boris Kirov{" "}
            </small>
            <br />
            <small>Videography: Boris Kirov @boriskirovv </small>
            <br />
            <small>Texts: Christo Panchev, Barbara Krulik</small>
            <br />
            <small>
              Art Consultant: Barbara Krulik @barbaraskrulik Marketing &
            </small>
            <br />
            <small>Communications: Ashley Lucio @ashually___ </small>
            <br />
            <small>Graphic design: Boris Kirov </small>
            <br />
            <small>Web design: Atamaweb @atamix_yes </small>
          </div>
        </div>
        <br />
        <br />
        <div className="grid">
          <div className="cs1 ce6">
            <Item src="/polop/polop-5.png" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/polop/polop-6.png" width={320} height={240} />
          </div>

          <div className="cs1 ce6">
            <VideoPlayer src="/video/power-of-love.mp4" />
          </div>
          <div className="cs7 ce12">
            <Item src="/polop/polop-10.png" width={320} height={240} />
          </div>
          <div className="cs1 ce12">
            <Item src="/polop/polop-2.png" width={320} height={240} />
          </div>
          <div className="cs1 ce6">
            <Item src="/polop/polop-3.png" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/polop/polop-4.png" width={320} height={240} />
          </div>
          <div className="cs1 ce6">
            <Item src="/polop/polop-1.png" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/polop/polop-9.png" width={320} height={240} />
          </div>
          <div className="cs1 ce6">
            <Item src="/polop/polop-7.png" width={320} height={240} />
          </div>
          <div className="cs7 ce12">
            <Item src="/polop/polop-8.png" width={320} height={240} />
          </div>
        </div>
      </main>
    </div>
  );
}
