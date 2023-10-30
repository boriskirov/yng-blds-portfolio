import VideoPlayer from "../components/video-item";
import Header from "../components/header";
import Metadata from "../components/metadata";

export default function Video() {
  return (
    <div className="main-container grid about-bg">
      <Metadata title="yng.blds" description="Videography" />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            <VideoPlayer src="/video/ferrino.mp4" />
            <VideoPlayer src="/video/ferrino-2.mp4" />
            <VideoPlayer src="/video/ferrino-3.mp4" />
            <VideoPlayer src="/video/rumbaba.mp4" />
            <VideoPlayer src="/video/barcelona.mp4" />
            <VideoPlayer src="/video/hertogen.mp4" />
            <VideoPlayer src="/video/onoe-caponoe.mp4" />
            <VideoPlayer src="/video/florence.mp4" />
            <VideoPlayer src="/video/madzhata.mp4" />
          </div>
        </div>
      </main>
    </div>
  );
}
