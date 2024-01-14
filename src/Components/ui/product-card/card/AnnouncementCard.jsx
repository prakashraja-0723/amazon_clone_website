import React from "react";

const AnnouncementCard = ({ card }) => {
  console.log(card);
  return (
    <>
      <div
        className={`col-span-3 lg:h-[230px] xl:h-[310px] bg-white p-5 relative text-[12px] leading-[18px] w-full`}
      >
        {card.thumbnails.map((banner, i) => {
          return (
            <img
              src={banner}
              alt={card.title}
              key={card.title}
              className={`w-full h-full`}
            />
          );
        })}
      </div>
      <div
        className={`col-span-1 bg-slate-100 lg:h-[230px] xl:h-[310px] relative p-5`}
      >
        <span className={`absolute top-0.5 right-3 text-slate-400 text-[12px] flex justify-between w-[95%]`}>
          <span className={`text-2xl relative -top-1 left-0.5 cursor-pointer text-slate-700`} >&times;</span>
					<div>
          <span className={`text-slate-900 font-bold`}>ad&nbsp;</span>sponsored
          by apple
					</div>
        </span>
        <img
          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/055dbd07-241a-4801-ab88-45959c41087c.jpg"
          alt=""
          className={` w-full h-full object-fill`}
        />
      </div>
    </>
  );
};
export default AnnouncementCard;
