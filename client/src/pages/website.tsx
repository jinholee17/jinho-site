import { useState } from "react";
import AboutMe from "./aboutme";
import Home from "./home";
import CosmicConnection from "./cosmic_connection";
import LockIn from "./lockin";
import Ignite from "./ignitecs";

enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
  COSMIC = "COSMIC",
  LOCKIN = "LOCKIN",
  IGNITE = "IGNITE",
}

export default function Website() {
  const [section, setSection] = useState<Section>(Section.HOME);

  async function scrollToTop() {
    await setSection(Section.ABOUTME);
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
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="website-top-header">
        <button
          className="home-button"
          id="home-button"
          aria-label="Home Button"
          onClick={() => setSection(Section.HOME)}
        >
          Jinho Lee
        </button>
        <button
          className="aboutme-button"
          aria-label="aboutme button"
          onClick={() => scrollToTop()}
        >
          about me
        </button>
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
      {section === Section.HOME ? <Home setSection={setSection} /> : null}
      {section === Section.ABOUTME ? <AboutMe setSection={setSection} /> : null}
      {section === Section.COSMIC ? (
        <CosmicConnection setSection={setSection} />
      ) : null}
      {section === Section.LOCKIN ? <LockIn setSection={setSection} /> : null}
      {section === Section.IGNITE ? <Ignite setSection={setSection} /> : null}
      <header className="website-bottom-header">
        <p className="thanks-text">thanks for stopping by!</p>
        <button
          className="aboutme-button"
          aria-label="aboutme button"
          onClick={() => {
            scrollToTop();
          }}
        >
          about me
        </button>
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
    </div>
  );
}
