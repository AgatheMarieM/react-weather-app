import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(()=> {setLoaded(false)}, [props.coordinates]);

    function displayResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }      

    if(loaded) {
    return(
        <div className="Forecast">
            <div className="row">
                {forecastData.map(function(forecastDaily, index) {
                    if(index < 5) { 
                        return (
                    <div className="col" key={index}>
                   <ForecastDay data={forecastDaily} />
                </div>
                );
                }  else { return null; }                                                
                })}                
            </div>     
        </div>
    );
} else {
    let apiKey= "3b763d2584ec69ef500ca12de0c53d66";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);

    return null;
    }
    
}