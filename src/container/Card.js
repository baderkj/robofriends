import React from	'react';
import CrardCss from'../Card.css';
const Card= (props)=>{
	return(
	<div className="card">
		<img src={`https://robohash.org/${props.id}?size=200x200`}/>
		<div className="bottom-card">
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	</div>
	);
}



export default Card;
