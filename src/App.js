import './App.css';
import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";


function App() {
  return (
    <div className="App app-wrapper">      
        <SearchEngine />        
        <Footer />     
    </div>
  );
}

export default App;
