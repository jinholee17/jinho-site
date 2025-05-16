import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
  COSMIC = "COSMIC",
  LOCKIN = "LOCKIN",
  IGNITE = "IGNITE",
}

interface pageProps {
  setSection: React.Dispatch<React.SetStateAction<Section>>;
}

export default function NavBar() {
  return (
    <React.Fragment>
      <header className="website-top-header">
        <Link to="/">
          <button
            className="home-button"
            id="home-button"
            aria-label="Home Button"
          >
            Jinho Lee
          </button>
        </Link>
        <div className="top-nav-right">
          <Link to="/about" className="aboutme-link">
            <button className="aboutme-button" aria-label="aboutme button">
              projects
            </button>
          </Link>
          <Link to="/about" className="aboutme-link">
            <button className="aboutme-button" aria-label="aboutme button">
              about me
            </button>
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
}
