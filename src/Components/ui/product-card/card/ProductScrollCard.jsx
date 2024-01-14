import React from "react";

const ProductScrollCard = ({ card }) => {
  return (
    <>
      <div className={`col-span-4 h-[342px] bg-white p-5 relative text-[12px] leading-[18px]`}>
        <h1 className={`text-2xl font-bold mb-2`}>{card.title}<span className={`text-[13px] leading-[17px] font-normal text-[#007185] hover:underline hover:text-[#C7511F] px-5`}>{card.open_link_text}</span></h1>
        <div className={` grid grid-flow-col lg:auto-cols-[22%] xl:auto-cols-[17%] gap-4 h-[88%] overflow-x-scroll overscroll-x-contain scroll-smooth scroll-style transition-all duration-500`}>
        {card.thumbnails_title.map((deal, i) => {
          return (
              <div className={`cursor-pointer flex flex-col w-full border border-slate-200 max-h-[100%] items-center justify-center gap-4 mb-4 shadow rounded`} key={crypto.randomUUID()}>
										<img src={card.thumbnails[i]} alt={deal} className={`lg:max-h-[140px] h-[150px] `}/>
                <div className={`px-3 text-left w-full`}>
                  <span className={`bg-red-500 text-white py-1 px-2 text-[9px]`}>{card.offers[i]}</span>
										<p>{deal}</p>
                </div>
              </div>
          );
        })}
        </div>
      </div>
    </>
  );
};
export default ProductScrollCard;
