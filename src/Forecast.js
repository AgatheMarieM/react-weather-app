import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
    return(
        <div className="Forecast">
            <div class="row">
                <div class="col">
                    <div className="Forecast-day">
                        Mon
                    </div>
                    <div className="Forecast-icon">
                        <WeatherIcon code="01d" size={30} />                    
                    </div>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-temperature-max">18° </span>
                        <span className="Forecast-temperature-min">8°</span>
                    </div>
                </div>
            </div>     
        </div>
    )
}