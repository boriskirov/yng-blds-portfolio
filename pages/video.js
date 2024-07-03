import VideoPlayer from "../components/video-item";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Video() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="yng.blds"
        description="Videography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid ">
          <div className="cs1 ce4 overlap">
            <div className="overlap-large">
              <VideoPlayer src="/video/ferrino.mp4" />
            </div>
            <div className="overlap-small">
              <VideoPlayer src="/video/allure-kitchen.mp4" />
            </div>
          </div>
          <div className="cs8 ce12 overlap">
            <div className="overlap-large">
              <VideoPlayer src="/video/ferrino-3.mp4" />
            </div>
            <div className="overlap-small">
              <VideoPlayer src="/video/rumbaba.mp4" />
            </div>
          </div>
          <div className="cs1 ce4 overlap">
            <div className="overlap-large">
              <VideoPlayer src="/video/barcelona.mp4" />
            </div>
            <div className="overlap-small">
              <VideoPlayer src="/video/hertogen.mp4" />
            </div>
          </div>
          <div className="cs7 ce10 overlap">
            <div className="overlap-large">
              <VideoPlayer src="/video/onoe-caponoe.mp4" />
            </div>
            <div className="overlap-small">
              <VideoPlayer src="/video/florence.mp4" />
            </div>
            <div className="overlap-medium">
              <VideoPlayer src="/video/madzhata.mp4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
