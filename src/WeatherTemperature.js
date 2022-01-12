import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [units, setUnits] = useState("celsius");

function showFahrenheit(event) {
event.preventDefault();
setUnits("fahrenheit")
}

function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius")
}

if (units === "celsius") {  
     return <div classeName="WeatherTemperature">
        <span className="today-temp">{Math.round(props.celsius)}</span>
            <span className="units">
                  °C
                  <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
         </div>
} else {
let fahrenheitTemperature = Math.round((props.celsius * 9/5) + 32);
    return (<div classeName="WeatherTemperature">
    <span className="today-temp">{fahrenheitTemperature}</span>
        <span className="units">
              <a href="/" onClick={showCelsius}>°C</a>
              °F
        </span>
     </div>)
}
   
}