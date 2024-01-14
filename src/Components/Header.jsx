import React from "react";
import NavTop from "./ui/header/NavTop.jsx";
import NavBottom from "./ui/header/NavBottom.jsx";

const Header = () => {
  return (
    <>
      <header className={`w-full h-[99px] text-white text-sm leading-3`} id={`header`}>
        <NavTop />
        <NavBottom />
      </header>
    </>
  );
};

export default Header;
