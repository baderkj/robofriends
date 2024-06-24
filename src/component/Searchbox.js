import React from 'react';
import SearchCss from '../Searchbox.css';

const Searchbox=({searchfield,searchchange})=>{



	return(
		<div className="input-box">
		<input  className="input" type="search" placeholder="Search Robots" onChange={searchchange}/>
		</div>
		);
}
export default Searchbox;