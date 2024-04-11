// VideoBackground.js
import React from "react";

const VideoBackground = ({ children }) => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen h-screen object-cover"
      >
        <source src="/main-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBackground;
