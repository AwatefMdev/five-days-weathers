import React, {useState} from "react"
import { apikey } from "../constants"

export  const LocationSearch =({onCityFound}) => {
const [searchCity, setSearchCity] = useState('')

const getLocation=(city)=>{
  
const url= `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${searchCity}`
fetch (url)
.then(res =>res.json())
.then(res=> res.find(l=> l.Country.ID ==='US') )
.then(res=> onCityFound({
  name: res.LocalizedName,
  key:res.Key,
  state: res.AdministrativeArea.CountryID,
}) )
}

 
  return(
<div className="search">
  <div >
   
      <input 
       placeholder="Search by City" 
      value={searchCity}
      onChange={event=>setSearchCity (event.target.value)}
  
      />
      <button onClick ={()=>getLocation(searchCity)}>Search</button>
   
    </div>
    </div>
 )
}

