import "../src/styles/App.css";
import Website from "./pages/website";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/AboutMe/AboutMe.tsx";
import Home from "./components/Home/Home.tsx";
import "./styles/index.css";
import "./styles/home.css";
import "./styles/aboutme.css";
import "./styles/portfolio.css";
import "./styles/projects.css";
/**
 * Main function
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Website />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
