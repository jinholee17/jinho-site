import { useState } from "react";
import Popup from "reactjs-popup";

enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
}

export default function Portfolio() {
  return (
    <div className="lighter-purple-bg" id="lighter-purple-bg">
      <h1 aria-label="Portfolio Header" className="portfolio-text">
        My featured works!
      </h1>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          // onClick={() => }
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                lock in at brown
              </p>
            </div>
          </div>
        </button>
        <div className="project-text">
          <p>In a team of 4, we programmed a study spot generator.</p>
        </div>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() => window.open("https://ignite-cs.vercel.app/", "_blank")}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                IgniteCS
              </p>
            </div>
          </div>
        </button>
        <div className="ignitecs-project-text">
          <p>
            As a program organizer for the IgniteCS chapter at Sophia Academy, I
            helped program the front-end for the new IgniteCS website!
          </p>
          <a href="https://ignite-cs.vercel.app/">Check it out here!</a>
        </div>
      </div>
      <div className="project">
        <button
          className="square-button"
          aria-label="square button"
          onClick={() =>
            window.open(
              "https://devpost.com/software/cosmic-connection",
              "_blank"
            )
          }
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                Cosmic Connection
              </p>
            </div>
          </div>
        </button>
        <div className="project-text">
          <p className="cosmic-text">
            <span className="bold-sans">Hack @ Brown 2024 Entry: </span>A star
            sign compatibility generator! Emails a match an AI generated
            love-letter.
          </p>
          <iframe
            className="cosmic-video"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/MxdVOOskPsU"
            title="Cosmic Connection"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
