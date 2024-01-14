import React from "react";
import PRODUCT_DATA from "../product-data.js";
import Card from "./ui/product-card/Card.jsx";

import slum_golf_prime_thumbnail from "/src/assets/images/slum_golf_prime_thumbnail.jpg"

const ProductCard = () => {
  return (
    <>
      <div
        className={`relative -top-[340px] grid grid-cols-4 gap-5 w-full px-5`}
      >
        <div className={`bg-white lg:h-[200px] xl:h-[280px] left-1/2 w-[72%] -translate-x-1/2  m-5 flex flex-col absolute top-full items-center justify-center`}>
          <img src={slum_golf_prime_thumbnail} alt="" className={`w-full h-full`}/>
        </div>
        <div
          className={`w-full max-w-[350px] bg-white h-[420px] p-5 flex flex-col`}
        >
          <h1
            className={`text-[21px] leading-[27.3px] font-bold mb-2.5 max-h-[54.6px] text-left`}
          >
            Up to 75% off | Electronics & accessories
          </h1>
          <img
            src={`https://images-eu.ssl-images-amazon.com/images/G/31/img21/HERO/CEPC/Unrec/Flexible_Desktop__Cat_Card_1X_1._SY304_CB586009760_.jpg`}
            alt=""
            className={`flex-1	`}
          />
          <div className={`text-[13px] leading-[17px] text-[#007185] hover:underline hover:text-[#C7511F] pb-0 pt-5 cursor-pointer `}>See all offers</div>
          
        </div>
        {PRODUCT_DATA.map((card, i) => {
          return <Card card={card} key={card.id} index={i} />;
        })}
      </div>
    </>
  );
};
export default ProductCard;
