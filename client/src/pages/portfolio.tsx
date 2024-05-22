import { useState } from "react";
import Popup from "reactjs-popup";

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

export default function Portfolio(props: pageProps) {
  async function scrollToTop(sect: Section) {
    await props.setSection(sect);
    const targetDiv = document.getElementById("back-home-button");

    if (targetDiv != null) {
      targetDiv.scrollIntoView({ behavior: "instant" });
    } else {
      console.error("Could not find target div");
    }
  }
  return (
    <div className="lighter-purple-bg" id="lighter-purple-bg">
      <h1 aria-label="Portfolio Header" className="portfolio-text">
        My featured works!
      </h1>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => {
            scrollToTop(Section.LOCKIN);
          }}
        >
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
        <button
          className="project-button"
          aria-label="lock in at brown button"
          onClick={() => {
            scrollToTop(Section.LOCKIN);
          }}
        >
          <div className="image-container">
            <img className="project-image" src="/static/images/lockedin.png" />
          </div>
        </button>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => {
            scrollToTop(Section.IGNITE);
          }}
        >
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
        <button
          className="project-button"
          aria-label="ignitecs button"
          onClick={() => {
            scrollToTop(Section.IGNITE);
          }}
        >
          <div className="image-container">
            <img className="project-image" src="/static/images/ignitecs.png" />
          </div>
        </button>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => {
            scrollToTop(Section.COSMIC);
          }}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/static/images/gray-square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                Cosmic Connection
              </p>
            </div>
          </div>
        </button>
        <div>
          <button
            className="project-button"
            aria-label="cosmic connections button"
            id="cosmic-connections"
            onClick={() => {
              scrollToTop(Section.COSMIC);
            }}
          >
            <div className="image-container">
              <img className="project-image" src="/static/images/cosmic.png" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
