import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";

const getCountries = (title) =>{
  return fatch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)
  .then((res) => res.json()) ;
};

function Countries(){
  const [card , setCard] = useState([]);
  const [loading , setLoding] = useState(false);

  useEffect (()=>{
    getCountries().then(res)=>{
      setLoding(false)
    }.
    console.log(res);
  })
  .catch((err) => {
    setLoding(false);
  });
}
 
  return (
    <div>
     {loding && <LoadingIndicator />};
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
      { card.map((el) =>(
        <CountriesCard
        countries={el.country}
        population = {el.population}
        id ={el.id}
        key ={el.id}
        />
      ))}

      
  
      </div>
      <div>
      </div>
    </div>
  )


export default Countries;
