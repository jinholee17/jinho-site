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
      <div className="aboutme-page">
        <div className="aboutme-page-top">
          <div className="aboutme-text-big">
            <h1 className="aboutme-title">About me</h1>
            <p className="aboutme-paragraph">
              Hello, I'm Jinho! I grew up in the Port neighborhood in
              Cambridge, and currently reside in Providence.
            </p>
            <p className="aboutme-paragraph">
              I’m a senior at Brown University where I am immersed in computer
              science, literary arts, theatre, and community organizing.
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
              // width="100%"
              // height="175"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="spotify-playlist"
            ></iframe>
          </div>
          <div className="aboutme-stack">
          <img className="newport-image" src="/static/images/newport.jpg"></img>
            <div className="aboutme-text-small">
              <p className="aboutme-paragraph">
                Outside of classes, I'm a mobile app developer for{" "}
                <a
                  href="https://www.browndailyherald.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Brown Daily Herald
                </a>
                , which you can check out our app {" "}
                <a
                  href="https://apps.apple.com/us/app/the-brown-daily-herald/id6642661925"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here!
                </a>{" "}
              </p>
            </div>
            <div className="aboutme-text-small">
              <p className="aboutme-paragraph">
                I used to perform and produce theatre, but now I just{" "}
                <a
                  href="https://www.browndailyherald.com/article/2024/12/outlandish-skits-bring-flair-to-one-of-browns-largest-cs-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  write + perform skits for the class I TA for 😱
                </a>
              </p>
            </div>
            <div className="aboutme-text-small">
                <p className="aboutme-paragraph">
                  I'm also the vice president of AI Robotics Ethics society and program
                  organizer for the IgniteCS chapter at Sophia Academy! I'd love to chat 
                  about anything regarding the applications of CS in education and policy!
                </p>
              </div>
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
          <img className="eclipse-image" src="/static/images/andy_humors.jpg"></img>
        </div>
      </div>
    </React.Fragment>
  );
}
