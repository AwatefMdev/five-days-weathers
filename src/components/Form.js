import  React ,{useState}from "react"


export  const Form =() => {
  const [unit, setUnit] = useState("celcuis");
   const handleunit=(e)=>{
    setUnit(e.target.value)
   }

 return (

   <nav>
        
      <label  >
        <input 
        value="celcuis"
        type="radio"
         checked={unit=== "celcuis"} 
         onChange={handleunit}
          className="radio" />
        Celcuis
      </label >
      <label >
        <input type="radio" 
        value="fahrenhiet"
        checked={unit ==="fahrenhiet"} 
        onChange={handleunit} 
        className="radio" />
        Fahrenhiet
      </label>
      
      </nav>
  )
}

