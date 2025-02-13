import React from "react";
import { Routes , Route  } from "react-router-dom";
import Home from "./Home";
import Bhaya from "./pages/Bhaya";

const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/why" element={<Bhaya />} /> */}
          
        </Routes>
    );
    }


    export default App;

