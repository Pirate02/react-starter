import React from "react";
import Home from "./pages/Home";

import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

const App =()=>{

  return(
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>} />

      </Routes>
    </div>
  )
}

export default App;
