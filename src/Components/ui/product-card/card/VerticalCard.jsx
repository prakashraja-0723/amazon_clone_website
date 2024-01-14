import React from 'react'

const VerticalCard = ({card,index}) => {
	return (
		<>
			<div className={`w-full max-w-[350px] bg-white h-[420px] flex flex-col py-5 text-[#0F1111] relative lg:text-[11px] lg:leading-[17px]	xl:text-[12px] xl:leading-[18px]`}>
				<h1 className={`lg:text-lg xl:text-[21px] leading-[28px] font-bold px-5 mb-2.5 max-h-[56px]`}>{card.title}</h1>
				<div className={`flex flex-col h-full px-5 gap-0.5`}>
					<div className={`flex max-h-[151px] gap-4`}>
						<figure className={`w-full h-full`}>
							<img src={card.thumbnails[0]} alt={card.thumbnails_title[0]}  className={`${index === 1 || index === 2 || index === 3 || index === 12 ? "lg:h-[100px] xl:h-[115px]":"h-[102px]"} object-cover`}/>
							<figcaption className={`min-h-[36px]`}>{card.thumbnails_title[0]}</figcaption>
						</figure>
						<figure className={`w-full h-full overflow-hidden`}>
							<img src={card.thumbnails[1]} alt={card.thumbnails_title[1]} className={`${index === 1 || index === 2 || index === 3 || index === 3 ? "lg:h-[100px] xl:h-[115px]":"h-[102px]"} object-cover`}/>
							<figcaption className={`min-h-[36px]`}>{card.thumbnails_title[1]}</figcaption>
						</figure>
					</div>
					<div className={`flex h-[138px] max-h-[151px] gap-4`}>
						<figure className={`w-full h-full `}>
							<img src={card.thumbnails[2]} alt={card.thumbnails_title[2]} className={`${index === 1 || index === 2 || index === 3 || index === 3 ? "lg:h-[100px] xl:h-[115px]":"h-[102px]"} object-cover`} />
							<figcaption>{card.thumbnails_title[2]}</figcaption>
						</figure>
						<figure className={`w-full h-full`}>
							<img src={card.thumbnails[3]} alt={card.thumbnails_title[3]} className={`${index === 1 || index === 2 || index === 3 || index === 3 ? "lg:h-[100px] xl:h-[115px]":"h-[102px]"} object-cover`} />
							<figcaption>{card.thumbnails_title[3]}</figcaption>
						</figure>
					</div>
				</div>
				<span className={`cursor-pointer text-[13px] leading-[17px] text-[#007185] hover:underline hover:text-[#C7511F] px-5 absolute bottom-5`}>{card.open_link_text}</span>
			</div>
		</>
	)
}
export default VerticalCard
