import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
interface pageProps {
  setSection: React.Dispatch<React.SetStateAction<Section>>;
}
enum Section {
  HOME = "HOME",
  ABOUTME = "ABOUTME",
  COSMIC = "COSMIC",
  LOCKIN = "LOCKIN",
  IGNITE = "IGNITE",
}

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="aboutme-page">
        <div className="aboutme-page-top">
          {/* <Link to="/" className="back-home-link">
            <button
              className="back-home-button"
              id="back-home-button"
              aria-label="Home Button"
            >
              -Back to home
            </button>
          </Link> */}
          <div className="aboutme-text">
            <h1 className="aboutme-title">About me</h1>
            <p className="aboutme-paragraph">
              Hello, I'm Jinho (he/him)! I grew up in the Port neighborhood in
              Cambridge, and currently reside in Providence.
            </p>
            <p className="aboutme-paragraph">
              I’m a junior at Brown University where I am immersed in computer
              science, literary arts, theatre, and community organizing. Outside
              of classes, I'm the vice president of AI Robotics Ethics society,
              program organizer for the IgniteCS chapter at Sophia Academy, and
              a teaching assistant for CS 150: Object-Oriented Programming!
            </p>
            <p className="aboutme-paragraph">
              I'm also a web developer for{" "}
              <a
                href="https://www.theindy.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The College Hill Independent
              </a>
              , and a mobile app engineer for the{" "}
              <a
                href="https://act.usc.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACT Lab
              </a>{" "}
              at Brown!
            </p>
            <p className="aboutme-paragraph">
              I enjoy running (currently training for the Providence half
              marathon), making lattes, updating my GoodReads profile, and
              watching live theatre.
            </p>
            <p className="aboutme-paragraph">
              I made this website using Typescript and React, and deployed using
              Vercel. Ask me about my favorite restaurants in Cambridge or
              Taylor Swift’s discography!
            </p>
            <iframe
              src="https://open.spotify.com/embed/playlist/6tS9viY0xw6ccuppOcB2bX?utm_source=generator"
              width="70%"
              height="175"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="aboutme-pics">
          <img className="gates-image" src="/static/images/gates.jpg"></img>
          <img
            className="colorado-image"
            src="/static/images/colorado-fun.jpg"
          ></img>
        </div>
        <div className="aboutme-pics">
          <img
            className="colorado-smiling-image"
            src="/static/images/face-reveal-colorado.jpg"
          ></img>
          <img className="cat-image" src="/static/images/puertorico.jpg"></img>

          <img
            className="sunflower-image"
            src="/static/images/sunflowers.jpg"
          ></img>
        </div>
        <div className="aboutme-pics">
          <img className="idtech-image" src="/static/images/idtech.png"></img>
          <img className="andy-image" src="/static/images/andyhouse.jpg"></img>
          <img className="eclipse-image" src="/static/images/eclipse.jpg"></img>
        </div>
      </div>
    </React.Fragment>
  );
}
