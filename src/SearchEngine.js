import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine() {
    const [city, setCity] = useState("City");
    const [weatherData, setWeatherData] = useState("");

    function displayWeather(response) {
        console.log(response.data);
        setWeatherData({
                city: response.data.name,
                date: "date",
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
    return (<div className="SearchEngine">
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city" onChange={updateCity}/>
            <button type="submit">Go</button>
            </form>
            <div className="TodayWeather"><h1>{weatherData.city}</h1>
        <h2>Last updated on: {weatherData.date} and {weatherData.time}</h2>
<div className="weather-data">
    <div className="row">
        <div className="col">
            <img src={weatherData.icon} alt="weather icon" rel="noreferrer"/>
        </div>
        <div className="col">
            <span>{Math.round(weatherData.temperature)}</span>
            <span className="units">
                  <a href="/">°C</a>
                  <a href="/">°F</a>
                </span>
        </div>
        <div className="col">
            <ul>
            <li>{weatherData.description}</li>
            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            <li>Humidity: {weatherData.humidity}%</li>
            </ul>
        </div>
    </div>
</div></div>
        
</div>) 

}