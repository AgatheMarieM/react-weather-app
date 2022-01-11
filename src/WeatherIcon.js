import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    return <div className="today-icon">
        <ReactAnimatedWeather
    icon="CLOUDY"
    color= "#ec6e4c"
    size= {60}
    animate={true}
     /></div> 
}