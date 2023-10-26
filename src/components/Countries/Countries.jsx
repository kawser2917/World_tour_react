import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <p>Visited Country: {visitedCountries.length}</p>
            {/* Visited country */}
            <ul>
                {
                    visitedCountries.map(country =>
                        <li key={country.cca3}>
                            {country.name.common}
                        </li>)
                }
            </ul>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* Display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;