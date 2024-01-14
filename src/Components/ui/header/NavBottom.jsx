import React from "react";
import menu from "/src/assets/svg/menu.svg";
import mini from "../../../assets/images/mini.jpg";

const NavBottom = () => {
  return (
    <>
      <nav
        className={`w-full h-[39px] bg-nav-bottom px-[24px] font-medium flex items-center justify-start text-[14px] leading-[12px]`}
      >
        <div
          className={`2xl:max-w-fit flex items-center justify-between lg:gap-1 xl:gap-2.5 2xl:gap-[24px] w-full *:py-[16px] *:pb-[18px] *:cursor-pointer`}
        >
          <span className={`flex gap-1.5 items-center font-bold`}>
            <img src={menu} alt="" />
            All
          </span>
          <span>Fresh</span>
          <span>Amazon miniTV</span>
          <span>Sell</span>
          <span>Best Sellers</span>
          <span>Today's Deals</span>
          <span>Mobiles</span>
          <span>Electronics</span>
          <span className={`flex items-center justify-center gap-1`}>
            Prime{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="4"
              viewBox="0 0 8 4"
            >
              <path
                id="Polygon_4"
                data-name="Polygon 4"
                d="M4,0,8,4H0Z"
                transform="translate(8 4) rotate(180)"
                fill="#fff"
              />
            </svg>
          </span>
          <span>Customer Service</span>
          <span>Gift Ideas</span>
          <span>New Releases</span>
          <span className={`lg:hidden 2xl:block`}>Home & Kitchen</span>
          <span className={`lg:hidden 2xl:block`}>Fashion</span>
          <span className={`lg:hidden 2xl:block`}>Books</span>
          <span className={`lg:hidden 2xl:block`}>Computers</span>
          <span className={`lg:hidden 2xl:block`}>Cars & Motorbike</span>
          <span
            className={`h-16 overflow-hidden lg:hidden xl:block 2xl:hidden`}
          >
            <img
              src={mini}
              alt="amazon_prime_tv"
              className={`h-full object-cover `}
            />
          </span>
        </div>
      </nav>
    </>
  );
};
export default NavBottom;
