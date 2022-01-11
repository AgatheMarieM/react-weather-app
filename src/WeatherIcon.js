import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    return  <ReactAnimatedWeather
    icon="CLOUDY"
    color= "#ec6e4c"
    size= {60}
    animate={true}
  />
}