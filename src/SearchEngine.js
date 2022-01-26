import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function SearchEngine(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

    function displayWeather(response) { 
                              
        setWeatherData({
                ready: true,
                city: response.data.name,
                coordinates: response.data.coord,
                date: new Date(response.data.dt * 1000),
                time: "time",
                temperature: response.data.main.temp,
                icon: response.data.weather[0].icon,
                description: response.data.weather[0].description,
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
              });
    }

function search() {
    let apiKey="3b763d2584ec69ef500ca12de0c53d66";
    let units="metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather); 
}

function handleSubmit(event){
    event.preventDefault();
    search();    
}

function updateCity(event) {
    setCity(event.target.value);
}

let form = (
<form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Your city..." className="form-control" onChange={updateCity}/>
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
            <WeatherIcon code={weatherData.icon} size={60} />            
        </div>        
        <div className="col">
            <WeatherTemperature celsiusTemperature={weatherData.temperature} />            
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
<Forecast coordinates={weatherData.coordinates} />      
</div>
);
} else {
    search();      
    return (form)         
} 

}