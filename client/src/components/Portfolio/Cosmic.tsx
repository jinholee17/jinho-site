import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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

export default function Cosmic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cosmic-page">
      <NavBar></NavBar>
      <Link to="/" className="back-home-link">
        <button
          className="back-home-button"
          id="back-home-button"
          aria-label="Home Button"
        >
          -Back to home
        </button>
      </Link>
      <div className="project-text-box">
        <h1 className="cosmic-title">Cosmic Connections</h1>
        <p className="bold-cosmic">Hack @ Brown 2024 Hackathon Entry: </p>
        <p className="cosmic-text">
          A star sign compatibility generator! Emails a match an AI generated
          love-letter.
        </p>
        <img className="cosmic-image2" src="/static/images/cosmic.png" />
        <p className="cosmic-text">
          My teammates were: Alyssa, Audrey, and Lana. This was all four of us's
          first hackathon, as well as project like this. It was a challenging
          process navigating full stack development and working as a team in a
          short period of time to create a larger-scale project. Another
          challenge was that all of us came into this project with very
          different skillsets. As someone who had extremely limited front-end
          experience prior to this, this project was very much a learning curve
          for me. This made it all the more rewarding in the end!
        </p>
        <p className="cosmic-text">
          I primarily worked on the backend for this project. We calculated the
          78 combinations of star signs to find each individual compatibility of
          every pair of signs. I programmed calls to the Open-AI API to access
          the prompt-to-text model to generate a love letter personalized to the
          user's person of choice. I then programmed an emailing option to the
          user's person of choice, using the javax.mail library. We made our
          website using Typescript, React, and Java.
        </p>
      </div>
      <div className="cosmic-vid-button">
        <iframe
          className="cosmic-video"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/MxdVOOskPsU"
          title="Cosmic Connection"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
              src="/static/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="square-text" id="square-text">
                Check out the devpost here!
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
