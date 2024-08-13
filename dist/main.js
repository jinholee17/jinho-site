import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/home.css";
import "./styles/aboutme.css";
import "./styles/portfolio.css";
import "./styles/projects.css";
/**
 * Main function
 */
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
