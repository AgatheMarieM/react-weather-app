import './App.css';
import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App app-wrapper">      
        <SearchEngine />
        <Forecast />
        <Footer />     
    </div>
  );
}

export default App;
