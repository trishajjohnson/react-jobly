import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);

  // if(!infoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
