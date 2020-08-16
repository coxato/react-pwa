import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getCountryInfo } from '../apis/countries';

import Loader from './loader';


function ShowCountry() {
    const [countryData, setCountryData] = useState(null);
    const { state: { countryName } } = useLocation();

    const getInfo = useCallback(
        async () => {
            const data = await getCountryInfo(countryName);
    
            const { 'name': fullname, capital, flag, population } = data;
            console.log(fullname, flag, capital, population);
            setCountryData({
                fullname, 
                capital, 
                flag, 
                population
            })
        },
        [countryName]
    )

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return(
        <div className="app-container">
            {
                !countryData
                ?
                <Loader />
                :
                <>
                    <Link to="/" id="back-link">Go back</Link>
                    <div className="country-container">
                        <h1>{countryData.fullname}</h1>
                        <h2>Capital: {countryData.capital}</h2>
                        <h2>Population: {countryData.population}</h2>
                        <img src={countryData.flag} alt="flag"/>
                    </div>
                </>
            }
        </div>
    )

}

export default ShowCountry;