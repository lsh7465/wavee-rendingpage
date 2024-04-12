import React from "react";
import VideoBackground from "./VideoBackground";

const FrontSection = () => {
  return (
    <>
      <VideoBackground>
        <div className="flex flex-col justify-center items-center h-screen">
          <p
            className="font-audiowide text-7xl wavee-text-fade 2sm:text-6xl
            bg-gradient-to-r from-[#0075ff] from-40% to-[#8c61e9] to-60%
            text-transparent bg-clip-text bg-center z-20"
          >
            WAVEE
          </p>
          <p className="description-fade text-white text-sm mt-5 text-center ">
            다양한 장르의 음악들을 <br />한 곳에서 만나보세요
          </p>
          <button
            className="button-scale text-white text-md border rounded-full p-3 px-6 mt-28 whitespace-nowrap opacity-65
            hover:opacity-80 transition-opacity duration-300 shadow-xl hover:shadow-blue-500/40"
          >
            <p>
              <span className="font-audiowide">WAVEE</span> 시작하기
            </p>
          </button>
        </div>
      </VideoBackground>
    </>
  );
};

export default FrontSection;
