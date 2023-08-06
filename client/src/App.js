
import Aboutmain from "./components/Aboutmain";
import Contactmain from "./components/Contactmain";
import Home from "./components/Home";

import React from "react";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div >
      
     
     <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/contact" element={<Contactmain/>}/>
            <Route path="/about" element={<Aboutmain/>}/>
      </Routes>
    </div>
  );
}

export default App;
