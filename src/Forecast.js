import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDayZero from "./ForecastDayZero";


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function displayResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }      

    if(loaded) {
        console.log(forecastData);
        return(
        <div className="Forecast">
            <div class="row">
                <div class="col">
                   <ForecastDayZero data={forecastData[0]} />
                </div>
            </div>     
        </div>
    )} else {
    let apiKey= "3b763d2584ec69ef500ca12de0c53d66";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);

    return null;
    }
    
}