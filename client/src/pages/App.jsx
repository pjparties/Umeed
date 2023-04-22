import React from "react";
import Navbar from "../components/Navbar";
// import { GetinTouch } from "../components/GetinTouch";
// import LocationCard from "../components/LocationCard";
import MainPageCard from "../components/MainPageCard";
import Carousel from "../components/Carousel";

function App() {
  return (
    // main wrapper
    <div className="">
      {/* navbar */}
      <Navbar/>
      <Carousel/>
      <MainPageCard/>
      <MainPageCard/>
      <MainPageCard/>
      <MainPageCard/>
      {/* <LocationCard/> */}
      {/* <h1 className="">Main App</h1> */}
    </div>
  );
}

export default App;
