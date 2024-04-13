import React from "react";

const ThirdSection = () => {
  return (
    <section className="h-screen pt-72 px-36 whitespace-nowrap lg:px-28 xl:px-36 2xl:px-80  ">
      <div className="text-right inline-block float-right">
        <p
          className="w-105 text-7xl font-bold tracking-tighter leading-11
    bg-gradient-to-r from-[#4E9EEE] from-75% to-[#7D1687] bg-clip-text text-transparent"
        >
          TOP100 <br />
          MUSIC CHART
        </p>
        <p className="text-white font-semibold leading-5 mt-4 ">
          당신이 좋아할 만한 인기 있는 음악들을
          <br />
          인기차트에서 만나보세요
        </p>
      </div>

      <div>
        <img
          src="/ThirdSectionImg.png"
          alt="ThirdSectionImg"
          className="w-auto h-auto mt-28"
        />
      </div>
    </section>
  );
};

export default ThirdSection;
