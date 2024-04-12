import React from "react";
import Header from "./components/FrontSection";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-center">
      <a href="/about" className="text-3xl">
        서비스소개
      </a>
    </div>
  );
};

export default page;
