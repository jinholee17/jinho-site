import { useState } from "react";
import Portfolio from "./portfolio";
import Home from "./home";

enum Section {
  HOME = "HOME",
  PORTFOLIO = "PORTFOLIO",
}

export default function Website() {
  const [section, setSection] = useState<Section>(Section.HOME);

  return (
    <div>
      <header>
        <button
          className="home-button"
          aria-label="Home Button"
          onClick={() => setSection(Section.HOME)}
        >
          Jinho Lee
        </button>
        <button
          className="portfolio-button"
          aria-label="portfolio button"
          onClick={() => setSection(Section.PORTFOLIO)}
        >
          Portfolio
        </button>
        <button
          className="email-button"
          aria-label="email button"
          onClick={() => (window.location.href = "mailto:jinho_lee@brown.edu")}
        >
          <img className="email-image" src="/src/assets/images/email.png" />
        </button>
        <button
          className="linkedin-button"
          aria-label="linkedin button"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/jinho-lee-23a30b217/")
          }
        >
          <img
            className="linkedin-image"
            src="/src/assets/images/linkedin.png"
          />
        </button>
        <button
          className="resume-button"
          aria-label="resume button"
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/document/d/16JF5fy8F_anR5J0NW3DCHFrc5VUXDOtn/edit?usp=sharing&ouid=104602903123943446095&rtpof=true&sd=true")
          }
        >
          <img className="resume-image" src="/src/assets/images/resume.png" />
        </button>
      </header>
      {section === Section.HOME ? <Home /> : null}
      {section === Section.PORTFOLIO ? <Portfolio /> : null}
      <h1 aria-label="Gearup Title">Home</h1>
    </div>
  );
}
