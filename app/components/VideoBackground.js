import React from "react";

const VideoBackground = ({ children }) => {
  return (
    <div className="relative flex justify-center items-center h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover 3xl:w-11/12 3xl:h-11/12"
      >
        <source src="/main-bg.mp4" type="video/mp4" />
      </video>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default VideoBackground;
