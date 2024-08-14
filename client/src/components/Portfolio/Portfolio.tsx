import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

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

export default function Portfolio() {
  async function scrollToTop(sect: Section) {
    const targetDiv = document.getElementById("back-home-button");

    if (targetDiv != null) {
      const targetOffset = targetDiv.offsetTop - 50;
      window.scrollTo({
        top: targetOffset,
        behavior: "instant",
      });
    } else {
      console.error("Could not find target div");
    }
  }
  return (
    <React.Fragment>
      <div className="lighter-purple-bg" id="lighter-purple-bg">
        <h1 aria-label="Portfolio Header" className="portfolio-text">
          My featured works!
        </h1>
        <div className="project">
          <Link to="/lockin">
            <button className="square-button" aria-label="square button">
              <div className="image-container">
                <img
                  className="square-image"
                  src="/static/images/gray-square.png"
                  id="square-image"
                />
                <div className="text-overlay">
                  <p className="square-text" id="square-text">
                    lock in at brown
                  </p>
                </div>
              </div>
            </button>
          </Link>
          <Link to="/lockin">
            <button
              className="project-button"
              aria-label="lock in at brown button"
            >
              <div className="image-container">
                <img
                  className="project-image"
                  src="/static/images/lockedin.png"
                />
              </div>
            </button>
          </Link>
        </div>
        <div className="project">
          <Link to="/ignitecs">
            <button className="square-button" aria-label="square button">
              <div className="image-container">
                <img
                  className="square-image"
                  src="/static/images/gray-square.png"
                  id="square-image"
                />
                <div className="text-overlay">
                  <p className="square-text" id="square-text">
                    IgniteCS
                  </p>
                </div>
              </div>
            </button>
          </Link>
          <Link to="/ignitecs">
            <button className="project-button" aria-label="ignitecs button">
              <div className="image-container">
                <img
                  className="project-image"
                  src="/static/images/ignitecs.png"
                />
              </div>
            </button>
          </Link>
        </div>
        <div className="project">
          <Link to="/cosmic">
            <button className="square-button" aria-label="square button">
              <div className="image-container">
                <img
                  className="square-image"
                  src="/static/images/gray-square.png"
                  id="square-image"
                />
                <div className="text-overlay">
                  <p className="square-text2" id="square-text">
                    Cosmic Connection
                  </p>
                </div>
              </div>
            </button>
          </Link>
          <div>
            <Link to="/cosmic">
              <button
                className="project-button"
                aria-label="cosmic connections button"
                id="cosmic-connections"
              >
                <div className="image-container">
                  <img
                    className="project-image"
                    src="/static/images/cosmic.png"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
