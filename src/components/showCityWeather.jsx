import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getWeather } from '../apis/weather';
import connectionContext from "./context";


function WeatherData({main, sys, weather}) {
    const {description, icon} = weather[0];
    const linkTo = {
        pathname: `/country`,
        state: { countryName: sys.country }
    }

    return(
        <div className="full-weather-data">
            <h1>{main.temp} C° </h1>
            <p>country <Link to={linkTo}>{sys.country}</Link>
            </p>
            <div className="weather-description">
                <p>{description}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            </div>
        </div>
    )
}


function ShowWeather() {
    const [cityName, setCityName] = useState('');
    const [cityData, setCityData] = useState(null);
    const { isOnline } = useContext(connectionContext);

    const getData = async ({key, target: {value}}) => {
        if(key === "Enter"){

            const data = await getWeather(cityName);
            setCityData(data);

        }else{
            setCityName(value);
        }
    }

    return(
        <div className="app-container">
            <div className="welcome">
                <h2>Hello, type a city to get its weather</h2>
            </div>

            <div className="input-container">
                <input disabled={!isOnline} type="text" onKeyUp={getData} placeholder="city name" />
            </div>

            {
                !isOnline && (
                    <h3>Please connect to internet</h3>
                )
            }

            {
                cityData && (
                    <WeatherData {...cityData}/>
                )
            }
        </div>
    )
}

export default ShowWeather;