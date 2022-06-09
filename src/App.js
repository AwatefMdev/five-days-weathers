import React, { useState } from "react"
import {useEffect} from "react"
import { WeatherDay } from "./components/WeatherDay"
import {LocationSearch} from "./components/LocationSearch"
import { apikey } from "./constants"
import { Form } from "./components/Form"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BsArrowLeft ,BsArrowRight} from 'react-icons/bs';



export  const App =() => {

const [locationKey, setLocationKey]= useState('321398');
const [weatherInfo , setWeatherInfo]= useState();
const [location, setLocation]= useState('Tunis');
const [ slideIndex , setSlideIndex]=useState(0);

function SampleNextArrow({ onClick }) {
 
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight/>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {

  return (
    <div className="arrow arrow-left" onClick={onClick}>
          <BsArrowLeft/>
    </div>
  );
}


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed:1000,
  beforeChange:(current,next)=>setSlideIndex(next),
  centerMode:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />

};


const padNum =(num) => {
const stringNum= num +'' ;
const stringLen= stringNum.length;
if (stringLen === 1){
  return '0'+stringNum
}else {
  return stringNum
}
}

useEffect(()=> {
if (locationKey){
  fetch (`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}`
  )
   .then(res=>res.json())
   .then(res=>setWeatherInfo(res.DailyForecasts
  .map(df => {
 
  return{
    temp:df.Temperature.Maximum.Value ,
    day:df.Date ,
    weatherkey:padNum(df.Day.Icon),
  }
    })))}  
   },[locationKey]) 
   return (
    <div >
             <Form/>
             <LocationSearch
                    onCityFound={cityInfo =>{
                    setLocationKey(cityInfo.key)
                    setLocation(cityInfo.name )  
         
                  } }
                  />
              <h1>{location}</h1>
          <div>
          <Slider {...settings}>
            
          {!!weatherInfo && weatherInfo.map((i,index) => (
          <div className={index === slideIndex ? 'slide slide-active': 
        
           'slide'}key={index}>
          
            <WeatherDay 
                temp={i.temp}
                day={i.day} 
                weatherkey={i.weatherkey}
            />
         
          </div>  
           ))} 
           
          </Slider>    
         </div>
     
    
      
         
    </div>
    

  );
}
