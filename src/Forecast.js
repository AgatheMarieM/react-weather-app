import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(props) {

    function displayResponse(response) {
        console.log(response.data);
    }  

    let apiKey= "3b763d2584ec69ef500ca12de0c53d66";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);

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