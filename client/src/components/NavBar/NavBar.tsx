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
        <Link to="/about" className="aboutme-link">
          <button className="aboutme-button" aria-label="aboutme button">
            about me
          </button>
        </Link>

        <button
          className="email-button"
          aria-label="email button"
          onClick={() => window.open("mailto:jinho_lee@brown.edu", "_blank")}
        >
          <img className="email-image" src="/static/images/email.png" />
        </button>
        <button
          className="linkedin-button"
          aria-label="linkedin button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jinho-lee-23a30b217/",
              "_blank"
            )
          }
        >
          <img className="linkedin-image" src="/static/images/linkedin.png" />
        </button>
        <button
          className="resume-button"
          aria-label="resume button"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true",
              "_blank"
            )
          }
        >
          <img className="resume-image" src="/static/images/resume.png" />
        </button>
      </header>
    </React.Fragment>
  );
}
