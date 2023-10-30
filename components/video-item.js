import React from "react";

const VideoPlayer = ({ src, width, height, controls }) => {
  return (
    <video
      src={src}
      width={width}
      height={height}
      controls={true}
      preload="metadata"
      type="video/mp4"
    />
  );
};

export default VideoPlayer;
