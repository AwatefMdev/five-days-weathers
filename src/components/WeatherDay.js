import React from "react"

export const WeatherDay=({unit,temp,day,weatherkey})=>{
    const fahrenheit = Math.round(temp)
    const celsius = Math.round((fahrenheit - 32) * 5/9)
            
        return (
            <div >
            <div className="img" >
                
            
                 
                <img 
                alt={weatherkey}
                src ={`https://developer.accuweather.com/sites/default/files/${weatherkey}-s.png`}
                />
            </div>
            <div> 
    
            <h2>Temp:{celsius}°C </h2>
            </div>
       
            <div> Day:{day}</div> 
            
    
            </div>
        )
      }