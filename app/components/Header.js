import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between align-middle p-11 pb-0 lg:px-28 xl:px-36 2xl:px-60">
        <a href="" className="flex-1">
          <img
            src="/logo.svg"
            alt="logo"
            className="header-logo-fade w-28 max-w-28"
          />
        </a>
        <a
          className="header-login-fade text-white text-lg p-1 px-4 whitespace-nowrap opacity-65
          hover:scale-110 transition-transform duration-300"
        >
          로그인
        </a>
      </div>
    </header>
  );
};

export default Header;
