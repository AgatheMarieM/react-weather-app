import "./App.css";
import React from "react";
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">  
    <div className="container">
      <div className="app-wrapper">      
      <SearchEngine defaultCity="Miami"/>        
      </div> 
      <small>
        <a href="https://github.com/AgatheMarieM/react-weather-app" target="_blank" rel="noreferrer"> 
        Open source{" "}
        </a>
        code by Agathe M.
      </small>
    </div>
    </div>
  );
}

export default App;
