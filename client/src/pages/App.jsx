import React from "react";
import Navbar from "../components/Navbar";
import { GetinTouch } from "../components/GetinTouch";

function App() {
  return (
    // main wrapper
    <div className="">
      {/* navbar */}
      <Navbar/>
      <GetinTouch/>
      {/* <h1 className="">Main App</h1> */}
    </div>
  );
}

export default App;
