import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDayZero(props) {
    return (
        <div>
             <div className="Forecast-day">
                {props.data.dt}
             </div>
             <div className="Forecast-icon">
                <WeatherIcon code={props.data.weather[0].icon} size={30} />                    
             </div>
             <div className="Forecast-temperatures">
                <span className="Forecast-temperature-max">{Math.round(props.data.temp.max)}° </span>
                <span className="Forecast-temperature-min">{Math.round(props.data.temp.min)}°</span>
             </div>
        </div>
    )
}