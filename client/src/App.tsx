import "../src/styles/App.css";
import Website from "./pages/website";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import LockIn from "./components/Portfolio/LockIn";
import Cosmic from "./components/Portfolio/Cosmic";
import Ignite from "./components/Portfolio/Ignite";
import "./styles/index.css";
import "./styles/home.css";
import "./styles/aboutme.css";
import "./styles/portfolio.css";
import "./styles/projects.css";
import "./styles/slideshow.css";
import { useState } from "react";
import BottomNavBar from "./components/NavBar/BottomNavBar";
import NavBar from "./components/NavBar/NavBar";
import Graphics from "./components/Portfolio/Graphics";
import ASL from "./components/Portfolio/ASL";
enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
  COSMIC = "COSMIC",
  LOCKIN = "LOCKIN",
  IGNITE = "IGNITE",
}
/**
 * Main function
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cosmic" element={<Cosmic />}></Route>
            <Route path="/lockin" element={<LockIn />}></Route>
            <Route path="/ignitecs" element={<Ignite />}></Route>
            <Route path="/up" element={<Graphics />}></Route>
            <Route path="/asl" element={<ASL />}></Route>
            <Route path="/ice" element={<ASL />}></Route>
            <Route path="/houses" element={<ASL />}></Route>
          </Routes>
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
