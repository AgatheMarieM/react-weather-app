import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function SearchEngine() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({ready: false});

    function displayWeather(response) { 
                              
        setWeatherData({
                ready: true,
                city: response.data.name,
                date: new Date(response.data.dt * 1000),
                time: "time",
                temperature: response.data.main.temp,
                icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                description: response.data.weather[0].description,
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
              });
    }

function handleSubmit(event){
    event.preventDefault();
    let apiKey="3b763d2584ec69ef500ca12de0c53d66";
    let units="metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);    
}

function updateCity(event) {
    setCity(event.target.value);
}

let form = (
<form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Type a city" className="form-control" onChange={updateCity}/>
                </div>
                <div className="col-3">
                    <input
                type="submit"
                value="GO"
                className="btn btn-outline-danger w-100 go-button"
              />
                </div>            
            </div>            
            </form>
);

if(weatherData.ready) {
    return (<div className="SearchEngine">
         {form}
            <div className="today-weather">
                <h1>{weatherData.city}</h1>
        <h2><FormattedDate date={weatherData.date}/></h2>

<div className="weather-data">
    <div className="row">
        <div className="col">
            <img src={weatherData.icon} alt="weather icon" rel="noreferrer" className="today-icon"/>
        </div>
        <div className="col">
            <span className="today-temp">{Math.round(weatherData.temperature)}</span>
            <span className="units">
                  <a href="/">°C</a>
                  <a href="/">°F</a>
                </span>
        </div>
        <div className="col">
            <div className="today-description text-capitalize">{weatherData.description}</div>
            <div className="today-details">
             <ul>            
            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            <li>Humidity: {weatherData.humidity}%</li>
            </ul>
            </div>            
        </div>
    </div>
</div>
</div>
<Forecast />      
</div>
);
} else {
    return form;
} 

}