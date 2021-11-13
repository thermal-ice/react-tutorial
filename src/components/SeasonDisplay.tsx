import React from 'react';
import '../css/SeasonDisplay.css'
// import

//{[index: string]: any}
const seasonConfig: {[index: string]: {[index:string]: string}} = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it's cold!",
    iconName: "snowflake"
  }
}

const getSeason = (lat:number, month: number): string => {

  if(month > 2 && month < 9){
    return lat >= 0? 'summer' : 'winter';
  }else{
    return lat < 0? 'summer' : 'winter';
  }

};


const SeasonDisplay = (props :{lat:number}) =>{
  // console.log(props.lat);
  // console.log(getSeason(props.lat,new Date().getMonth()));
  const season = getSeason(props.lat,new Date().getMonth());
  const {text, iconName} = seasonConfig[season];


  return (
      //Notice that the first root component's className is the same as the function name!
      //Not necessary, but good practice to do!
      <div className={`season-display ${season}`}>
        <i className={`iconLeft massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`iconRight massive ${iconName} icon`}/>
      </div>

  );
};

export default SeasonDisplay;