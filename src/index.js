import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Seriesdata from './Seriesdata';

/*function netflixcd(val){
	return(
			<Card image={val.image}
		    	title={val.title}
		    	sname={val.sname}
		    />	
		)
}*/
ReactDOM.render(
  <>
  	<h1 className="heading">List of top Netflix Series</h1>

    {/*{Seriesdata.map(function netflixcd(val){
         	return(
     			<Card image={val.image}
     		    	title={val.title}
     		    	sname={val.sname}
     		    />	
     		);
         })}*/} {/*using map method*/}
    

    {Seriesdata.map((val) => {
    	return(
			<Card image={val.image}
		    	title={val.title}
		    	sname={val.sname}
		    />	
		);
    })}   {/*using map method with fat arrow fun*/}
  </>,
  document.getElementById('root')
);

