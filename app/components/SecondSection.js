import React from "react";

const SecondSection = () => {
  return (
    <section className="h-screen pt-72 px-36 whitespace-nowrap lg:px-28 xl:px-36 2xl:px-80">
      <div>
        <p
          className="w-104 text-8xl font-bold tracking-tighter leading-12
      bg-gradient-to-r from-[#4E9EEE] from-25% to-[#7D1687] to-75% bg-clip-text text-transparent"
        >
          VARIOUS <br />
          STYLES
        </p>
        <p className="text-white font-semibold leading-5 mt-4 inline-block">
          다양한 스타일의 음악을 한데 모아,
          <br />
          팝, 록 힙합, EDM 등 다양한 스타일의 음악을 즐겨보세요.{" "}
        </p>
      </div>

      <div className="float-right">
        <img src="/FirstSectionImg.png" alt="FirstSectionImg"className="w-auto h-auto" />
      </div>
    </section>
  );
};

export default SecondSection;
