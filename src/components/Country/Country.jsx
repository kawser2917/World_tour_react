import { useState } from "react";
import "./Country.css"
const Country = ({country, handleVisitedCountry,handleVisitedFlag}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited? 'visited':'none-visited'}`}>
            <h3 style={{color: visited? "purple":'white'}}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark As Visited</button><br /><br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited? "Visited":"Going"}</button>
           <p>{visited ? 'I have Visited': "I have to Visit"}</p>
        </div>
    );
};

export default Country;