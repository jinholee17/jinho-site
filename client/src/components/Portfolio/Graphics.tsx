import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Graphics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="up-page">
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
        <h1 className="cosmic-title">Up Simulation</h1>
        <p className="bold-cosmic">Graphics Course Term Project:</p>
        <p className="cosmic-text">
          An OpenGL realtime application, built using C++. Simulates the flying house 
          from the movie Up (2009)!
        </p>
        <div className="lockin-video-div" onClick={handleVideoClick} >
          <video className="graphics-video" autoPlay loop ref={videoRef}
          >
            <source src="/static/videos/graphics-video2.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="cosmic-text">
          Throughout the semester, we created both raytracers and real-time OpenGL graphics applications.
          In this cumulative final project, we were given the freedom to expand upon those projects.
        </p>
        <p className="cosmic-text">
          Our real-time OpenGL program takes in JSON scenefiles, then parses them, and renders
          them using a realtime graphics pipeline.
        </p>
        <p className="cosmic-text">
          We implemented normal-mapping to achieve 3D textures, environment maps to create the seamless
          + realsitic background, and a parser which can edit each individual balloon in order to move them.
          I focused on implementing bezier curves, using 4 control points in order to mathematically
          compute a smooth curve for the house and camera to travel on.
        </p>
        <p className="cosmic-text">
          Watch the full demo here!
        </p>
        <div className="graphics-video-div" >
          <iframe className="graphics-video2" src="https://drive.google.com/file/d/1Lk-QV7-OH6Kfgw3Yeii02vOwi74cvJ48/preview"
              allowFullScreen/>
        </div>
      </div>
      <button
        className="lockin-square-button"
        aria-label="square button"
        // onClick={() =>
        //   window.open("https://github.com/jinholee17/lockin-at-brown", "_blank")
        // }
      >
        <div className="image-container">
          <img
            className="square-image"
            src="/static/images/square.png"
            id="square-image"
          />
          <div className="text-overlay">
            <p className="lockin-square-text" id="square-text">
              Generate balloons! (Coming soon)
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
