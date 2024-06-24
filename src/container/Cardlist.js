import React from 'react';
import Card from './Card';

const Cardlist= ({robots})=>{
	return(
		
		robots.map(function grabCards(card,i) {
			return	<Card  key={i} id={card.id} name={card.name} email={card.email}/>
		})
	


	);
}



export default Cardlist;
