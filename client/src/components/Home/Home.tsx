import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import EmojiButton from "./EmojiProps";

const interpolateColor = (t: number, startColor: string, endColor: string): string => {
  const parseColor = (color: string) => {
    const matches = color.match(/#([0-9a-fA-F]{6})/);
    if (!matches) throw new Error("Invalid color format");
    const [, hex] = matches;
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  };

  const start = parseColor(startColor);
  const end = parseColor(endColor);

  const interpolate = (startValue: number, endValue: number) =>
    startValue + t * (endValue - startValue);

  const r = Math.round(interpolate(start.r, end.r));
  const g = Math.round(interpolate(start.g, end.g));
  const b = Math.round(interpolate(start.b, end.b));

  return `rgb(${r}, ${g}, ${b})`;
};

export default function Home() {
  const imagePath1 = "/static/images/square.png";
  const imagePath2 = "/static/images/face-reveal-mbta.png";
  let currentImagePath = imagePath1;

  const [backgroundColor, setBackgroundColor] = useState("#e5f4f9");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const startColor = "#bca7d7;";
    const endColor = "#b09dc9";
    const duration = 4000; // how long a cycle is

    let animationFrame: number;

    const animateBackground = (startTime: number) => {
      const now = performance.now();
      const elapsed = now - startTime;

      // normalize time to [0, 1] using a sine wave for smoother transition/oscillation
      const t = (Math.sin((elapsed / duration) * Math.PI * 2 - Math.PI / 2) + 1) / 2;

      const newColor = interpolateColor(t, startColor, endColor);
      setBackgroundColor(newColor);

      animationFrame = requestAnimationFrame(() => animateBackground(startTime));
    };

    const startTime = performance.now();
    animateBackground(startTime);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

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
    const targetDiv = document.getElementById("gradient-box-1");

    if (targetDiv != null) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Could not find target div");
    }
  }

  return (
    <React.Fragment>
      <div className="purple-bg">
        <h1
          aria-label="Introduction Text"
          className="hello-text"
          id="hello-text"

        >
          <span style={{backgroundColor}}><span className="bold-sans">Jinho Lee</span> </span>
          is a software developer interested in unifying data and storytelling to create human-centered software.
          <h1
          aria-label="Introduction Text"
          className="prev-text"
            >Previously SWE intern @ MathWorks. 
          </h1> 
        </h1>
        <div className="buttons">
          <button
            className="square-facereveal-button"
            aria-label="square button"
            onClick={() => changeImage()}
          >
            <div className="image-container">
              <img
                className="square-image"
                src="/static/images/square.png"
                id="square-image"
              />
              <div className="text-overlay">
                <p className="square-text" id="square-text">
                  face reveal
                </p>
              </div>
            </div>
          </button>
          <EmojiButton/>
          <button
            className="square-portfolio-button"
            aria-label="square button"
            onClick={() => scrollToPortfolio()}
          >
            <div className="image-container">
              <img
                className="square-image"
                src="/static/images/square.png"
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
              onClick={() => window.open("https://github.com/jinholee17/")}
            >
              <div className="image-container">
                <img
                  className="rectangle-image"
                  src="/static/images/rectangle.png"
                  id="rectangle-image"
                />
                <div className="text-overlay">
                  <img className="email-image" src="/static/images/resume.png" />
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
                  src="/static/images/rectangle.png"
                  id="rectangle-image"
                />
                <div className="text-overlay">
                  <img className="linkedin-image" src="/static/images/linkedin.png" />
                </div>
              </div>
            </button>
            <button
              className="rectangle-button"
              aria-label="rectangle button"
              onClick={() =>
                window.open("mailto:jinho_lee@brown.edu", "_blank")
              }
            >
              <div className="image-container">
                <img
                  className="rectangle-image"
                  src="/static/images/rectangle.png"
                  id="rectangle-image"
                />
                <div className="text-overlay">
                  <img className="email-image" src="/static/images/email.png" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Portfolio />
    </React.Fragment>
  );
}
