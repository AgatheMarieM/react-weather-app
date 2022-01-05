import "./App.css";
import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">  
    <div className="container">
      <div className="app-wrapper">      
      <SearchEngine />        
      <Footer />
      </div> 
    </div>                                          
    </div>
  );
}

export default App;
