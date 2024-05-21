import { useState } from "react";
import Popup from "reactjs-popup";
import Portfolio from "./portfolio";

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

export default function Home(props: pageProps) {
  // const imagePath1 = "/src/assets/images/square.png";
  // const imagePath2 = "/src/assets/images/face-reveal.png";
  const imagePath1 = "/images/square.png";
  const imagePath2 = "/images/face-reveal.png";
  let currentImagePath = imagePath1;

  function changeImage() {
    const image = document.getElementById("square-image") as HTMLImageElement;
    const imagetext = document.getElementById(
      "square-text"
    ) as HTMLParagraphElement;
    if (currentImagePath === imagePath1) {
      image.src = imagePath2;
      currentImagePath = imagePath2;
      imagetext.textContent = "";
    } else {
      image.src = imagePath1;
      currentImagePath = imagePath1;
      imagetext.textContent = "face reveal";
    }
  }

  function scrollToPortfolio() {
    const targetDiv = document.getElementById("lighter-purple-bg");

    if (targetDiv != null) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Could not find target div");
    }
  }

  function scrollToTop() {
    const targetDiv = document.getElementById("home-button");

    if (targetDiv != null) {
      targetDiv.scrollIntoView({ behavior: "instant" });
    } else {
      console.error("Could not find target div");
    }
  }

  return (
    <div className="purple-bg">
      <h1 aria-label="Introduction Text" className="hello-text">
        Hi! I’m <span className="bold-sans">Jinho</span>! I’m a full-stack
        developer studying computer science and literary arts at Brown
        University. I'm interested in the intersections of CS and language, as
        well as creating accessible computer science education.
      </h1>
      <div className="buttons">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => changeImage()}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                face reveal
              </p>
            </div>
          </div>
        </button>
        <button
          className="diamond-button"
          aria-label="diamond button"
          onClick={() => {
            props.setSection(Section.ABOUTME), scrollToTop();
          }}
        >
          <div className="image-container">
            <img
              className="diamond-image"
              src="/src/assets/images/diamond.png"
              id="diamond-image"
            />
            <div className="text-overlay">
              <p className="diamond-text" id="diamond-text">
                about me
              </p>
            </div>
          </div>
        </button>
        <button
          className="square-portfolio-button"
          aria-label="square button"
          onClick={() => scrollToPortfolio()}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                portfolio
              </p>
            </div>
          </div>
        </button>
        <div className="rectangle-stack">
          <button
            className="rectangle-button"
            aria-label="rectangle button"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true",
                "_blank"
              )
            }
          >
            <div className="image-container">
              <img
                className="rectangle-image"
                src="/src/assets/images/rectangle.png"
                id="rectangle-image"
              />
              <div className="text-overlay">
                <p className="square-text" id="square-text">
                  resume
                </p>
              </div>
            </div>
          </button>
          <button
            className="rectangle-button"
            aria-label="rectangle button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jinho-lee-23a30b217/",
                "_blank"
              )
            }
          >
            <div className="image-container">
              <img
                className="rectangle-image"
                src="/src/assets/images/rectangle.png"
                id="rectangle-image"
              />
              <div className="text-overlay">
                <p className="square-text" id="square-text">
                  linkedin
                </p>
              </div>
            </div>
          </button>
          <button
            className="rectangle-button"
            aria-label="rectangle button"
            onClick={() => window.open("mailto:jinho_lee@brown.edu", "_blank")}
          >
            <div className="image-container">
              <img
                className="rectangle-image"
                src="/src/assets/images/rectangle.png"
                id="rectangle-image"
              />
              <div className="text-overlay">
                <p className="square-text" id="square-text">
                  email
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Portfolio setSection={props.setSection} />
    </div>
  );
}
