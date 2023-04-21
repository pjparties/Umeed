import React from "react";
import Navbar from "../components/Navbar";
import { GetinTouch } from "../components/GetinTouch";
import LocationCard from "../components/LocationCard";

function App() {
  return (
    // main wrapper
    <div className="">
      {/* navbar */}
      <Navbar/>
      <LocationCard/>
      {/* <h1 className="">Main App</h1> */}
    </div>
  );
}

export default App;
