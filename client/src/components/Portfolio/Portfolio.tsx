import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "./Slideshow";

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
  return (
    <React.Fragment>
      <div className="gradient-box-1" id="gradient-box-1"></div>
      <div className="white-bg" id="white-bg">
        <h1 aria-label="Portfolio Header" className="portfolio-text">
          My featured works!
        </h1>
        <div className="project">
          <Link to="/asl">
            <button
              className="project-button"
              aria-label="lock in at brown button"
            >
              <div className="image-container">
                <div className="image-crop-box">
                  <img
                    className="project-image"
                    src="/static/images/asl_logo.png"
                  />
                  <div className="hide-text" id='overlay'>An American Sign Language translator using computer vision algorithms</div>
                </div>
              </div>
            </button>
            <h1 className="project-title-text">
              ASL Interpreter
            </h1>
          </Link>
          <Link to="/up">
            <button
              className="project-button"
              aria-label="lock in at brown button"
            >
              <div className="image-container">
                <div className="image-crop-box">
                  <video className="projects-video" autoPlay loop muted preload="auto">
                    <source src="/static/videos/graphics-crop.mp4" type="video/mp4" />
                  </video>
                  <div className="hide-text" id='overlay'>A realtime graphics simulation of Pixar's Up</div>
                </div>
              </div>
            </button>
            <h1 className="project-title-text">
              Pixar's Up Simulation
            </h1>
          </Link>
        </div>
        <div className="project">
          <Link to="/bdh">
            <button
              className="project-button"
              aria-label="brown daily herald button"
            >
              <div className="image-container">
                <div className="image-crop-box">
                  <img
                    className="project-image"
                    src="/static/images/bdh.png"
                  />
                  <div className="hide-text" id='overlay'>The mobile app for the Brown Daily Herald, Brown's oldest student newspaper</div>
                </div>
              </div>
            </button>
            <h1 className="project-title-text">
              Brown Daily Herald App
            </h1>
          </Link>
          <Link to="/bdh">
            <button
              className="project-button"
              aria-label="sea ice melting predictor button"
            >
              <div className="image-container">
                <div className="image-crop-box">
                  <img
                    className="project-image"
                    src="/static/images/sea-ice.png"
                  />
                  <div className="hide-text" id='overlay'>A deep learning research investigation for predicting sea ice melting</div>
                </div>
              </div>
            </button>
            <h1 className="project-title-text">
              Sea Ice Melting CNN
            </h1>
          </Link>
        </div>
      </div>
      <div className="gradient-box-2" id="gradient-box-2"></div>
      <h1 aria-label="Portfolio Header" className="portfolio-text-2">
          Extras!
      </h1>
      <div className="gray-bg">
        <Slideshow></Slideshow>
      </div>
    </React.Fragment>
  );
}
