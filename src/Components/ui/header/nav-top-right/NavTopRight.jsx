import React from "react";
import india from "/src/assets/svg/india.svg";
import cart from "/src/assets/svg/cart.svg";

const NavTopRight = () => {
  return (
    <>
      <div
        className={`flex items-end justify-center text-white gap-4 text-[14px]`}
      >
				<div className={`w-[22px] flex gap-2 mr-10 items-end justify-start`}>
					<img src={india} alt="India_country" /><span className={`font-bold flex items-center gap-1`}>EN<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 8 4">
						<path id="Polygon_4" data-name="Polygon 4" d="M4,0,8,4H0Z" transform="translate(8 4) rotate(180)" fill="#fff"/>
					</svg> </span>
				</div>
        <div className={`text-[12px] flex flex-col `}>
          <p>Hello, sign in</p>
          <p className={`text-[14px] font-bold pt-1 flex items-center gap-1`}>Account & Lists <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 8 4">
						<path id="Polygon_4" data-name="Polygon 4" d="M4,0,8,4H0Z" transform="translate(8 4) rotate(180)" fill="#fff"/>
					</svg>
					</p>
        </div>
				
				<div className={`flex flex-col`}>
          <span>return</span>
          <span className={`xl:text-[14px] font-bold pt-1 flex items-center gap-1`}>& Orders <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 8 4">
						<path id="Polygon_4" data-name="Polygon 4" d="M4,0,8,4H0Z" transform="translate(8 4) rotate(180)" fill="#fff"/>
					</svg></span>
        </div>
        <div className={`flex items-end text-[14px] font-bold mr-4 relative`}>
					<span className={`text-[18px] text-orange-500 absolute -top-0.5 left-[45%] xl:left-[27%]`}>0</span>
					<img src={cart} alt=""/><span className={`lg:hidden xl:block`}>Cart</span>
				</div>
      </div>
    </>
  );
};
export default NavTopRight;
