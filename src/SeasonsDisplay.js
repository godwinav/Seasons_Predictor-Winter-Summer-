import  './Seasonss.css'
import React from 'react';




const seasonConfig = {
    Winter:{ 
        text:"It's Cold",
        iconNmae:"snowflake"
    },
    Summer:{
        text:"Let's hit the beach!",
        iconNmae: "sun"
    }
}

const getSeason=(lat,month) =>{
    if(month > 2 && month < 9){
      return  lat > 0? "Winter" : "Summer"
    }
    else{
        return lat > 0? "Summer" : "Winter"
    }
}


const SeasonsDisplay = (props) =>{
  const Season = getSeason(props.lat, new Date().getMonth());
  const{text,iconNmae}= seasonConfig[Season]

  console.log(Season)
    return(
        
    <div className={`seasons-display ${Season}`}>
        <i className={`massive icon-left ${iconNmae} icon`}/>
        <h1>{text}</h1>
        <i className={`massive icon-right ${iconNmae} icon`}/>
    </div>
  
    );

};




export default SeasonsDisplay;