import React from 'react';
import '../index.css';
import Cardlist from './Cardlist';
import Searchbox from '../component/Searchbox.js';







class App extends React.Component{

	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

onsearchchange=(event)=>{
	this.setState({searchfield:event.target.value})

	
}


async componentDidMount (){
	const fetchFirst=await fetch('https://jsonplaceholder.typicode.com/users');
	const fetchEnd=await fetchFirst.json();
	this.setState({robots:fetchEnd});
}



	render(){

	 const robots=this.state.robots;
	const filterRobots=robots.filter((robot)=>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})

	if(robots.length===0)
		{return <h1>Loading</h1>}
		else{
			return(
		<>
	 <div className="header">
  	<h1>ROBOFRIENDS </h1>
  </div>
  <Searchbox searchchange={this.onsearchchange}/>
  <div className="container">
   	<Cardlist robots={filterRobots}/>
    </div>	
    </>
		);
		}
		
	}
	


}
export default App;