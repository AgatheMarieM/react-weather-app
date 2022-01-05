import React, { useState } from "react";

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


            </div>) 

}