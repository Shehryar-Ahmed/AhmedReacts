import "./App.css";
import * as React from "react";
import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Comp/Services";
import Contact from "./Comp/Contact";
import Register from "./Comp/Register";
import OurConts from "./contexts/context";
import Login from "./Comp/Login";

function App() {
  return (
    <>
      <OurConts>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route path="/*" element={<Home />} /> */}
        </Routes>
      </OurConts>
    </>
  );
}

export default App;
