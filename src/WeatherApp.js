import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function WeatherApp() {
    return <div className="WeatherApp">
        <SearchEngine />
        <Forecast />
        <Footer />
        </div>
}