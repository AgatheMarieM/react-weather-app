import React from "react";

export default function FormattedDate(props) {
console.log(props.date)
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[props.date.getDay()];
let hour = props.date.getHours();
hour = (hour < 10 ? `0` : ``) + hour;
let minutes = props.date.getMinutes();
minutes = (minutes < 10 ? `0` : ``) + minutes;

return (<div className="FormattedDate">
        Last updated on: {day}, {hour}:{minutes}
    </div>)
}