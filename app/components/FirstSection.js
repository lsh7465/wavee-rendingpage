import React from "react";
import Record from "./Record";

const FirstSection = () => {
  return (
    <section className="h-screen text-center pt-72">
      <p
        className="text-7xl font-extrabold tracking-tighter leading-11
          bg-gradient-to-r from-[#4E9EEE] from-40% to-[#7D1687] to-60% bg-clip-text text-transparent"
      >
        DISCOVER
        <br />
        NEW MUSIC
      </p>
      <p className="text-white mt-4 font-medium">
        8천만 개가 넘는 트랙을 즐겨보세요.
      </p>
      <Record />
    </section>
  );
};

export default FirstSection;
