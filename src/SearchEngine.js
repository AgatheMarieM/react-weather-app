import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
    const [city, setCity] = useState("");

function handleSubmit(event){
    alert(`${city}`);
}
function updateCity(event) {
    setCity(event.target.value);

}
    return (<div className="SearchEngine">
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city" onChange={updateCity}/>
            <button type="submit">Go</button>
            </form>
        <h1>{city}</h1>
        <h2>Last updated on: date and time</h2>
<div className="weather-data">
    <div class="row">
        <div className="col">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather icon" rel="noreferrer"/>
        </div>
        <div className="col">
            5 
            <span className="units">
                  <a href="/">°C</a>
                  <a href="/">°F</a>
                </span>
        </div>
        <div className="col">
            <ul>
            <li>Sunny</li>
            <li>Wind: 2km/h</li>
            <li>Humidity: 50%</li>
            </ul>
        </div>
    </div>
</div>

    </div>) 

}