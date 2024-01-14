import React from 'react';
import NavTopLeft from './nav-top-left/NavTopLeft';
import NavTopCenter from './nav-top-center/NavTopCenter';
import NavTopRight from "./nav-top-right/NavTopRight.jsx";

const NavTop = () => {
  return (
    <>
      <nav
        className={`w-full h-[60px] bg-nav-top px-[22px] flex items-center justify-start gap-[32px] text-nav-color`}
      >
        <NavTopLeft />
        <NavTopCenter />
        <NavTopRight/>
      </nav>
    </>
  );
};

export default NavTop;
