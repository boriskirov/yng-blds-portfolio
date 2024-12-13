import VideoPlayer from "../components/video-item";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Video() {
  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Videography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid ">
          <div className="cs1 ce12 grid">
            <div className="cs1 ce4">
              <VideoPlayer src="/video/ferrino.mp4" />
            </div>
            <div className="cs5 ce8">
              <VideoPlayer src="/video/allure-kitchen.mp4" />
            </div>

            <div className="cs9 ce12">
              <VideoPlayer src="/video/ferrino-3.mp4" />
            </div>
          </div>
          <div className="cs1 ce12 grid">
            <div className="cs1 ce4">
              <VideoPlayer src="/video/barcelona.mp4" />
            </div>
            <div className="cs5 ce8">
              <VideoPlayer src="/video/wesley.mp4" />
            </div>
            <div className="cs9 ce12">
              <VideoPlayer src="/video/onoe-caponoe.mp4" />
            </div>
          </div>
          <div className="cs1 ce12 grid">
            <div className="cs1 ce4">
              <VideoPlayer src="/video/power-of-love.mp4" />
            </div>
            <div className="cs5 ce8">
              <VideoPlayer src="/video/divane-9.mp4" />
            </div>
            <div className="cs9 ce12">
              <VideoPlayer src="/video/rumbaba.mp4" />
            </div>
            <div className="cs1 ce4">
              <VideoPlayer src="/video/200-postcards.mp4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
