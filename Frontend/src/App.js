// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Barchartcomp from "./components/Barchartcomp";
import Linechartcomp from "./components/Linechartcomp";
import Piechartcomp from "./components/Piechartcomp";
import Genderbarchart from "./components/Genderbarchart";
import Histogramchart1 from "./components/Histogramchart1";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Barchartcomp />
      <Linechartcomp />
      <Piechartcomp />
      <Genderbarchart />
      <Histogramchart1 />
    </Router>
  );
}

export default App;
