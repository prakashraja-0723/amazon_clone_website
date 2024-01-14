import React from 'react'
import VerticalCard from "./card/VerticalCard.jsx";
import ProductScrollCard from "./card/ProductScrollCard.jsx";
import AnnouncementCard from "./card/AnnouncementCard.jsx";

const Card = ({card,index}) => {
	return (
		<>
			{card.thumbnails.length === 4 &&
				<VerticalCard card={card} index={index}/>
			}
			{card.thumbnails.length > 4 &&
			<ProductScrollCard card={card}/>
			}
			{card.thumbnails.length === 1 &&
			<AnnouncementCard card={card}/>
			}
		</>
	)
}
export default Card
