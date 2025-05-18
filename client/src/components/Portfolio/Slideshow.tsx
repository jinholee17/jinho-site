import React, { useState } from "react";

const slides = [
  {
    title: "Lock in at Brown",
    image: "/static/images/lockedin.png",
    link: "/lockin",
    overlay: "A study-spot recommender"
  },
  {
    title: "IgniteCS + Full Stack at Brown",
    image: "/static/images/ignitecs.png",
    link: "/ignitecs",
    overlay: "Program Bringing CS education to Providence Schools"
  },
  {
    title: "Cosmic Connection",
    image: "/static/images/cosmic.png",
    link: "/cosmic",
    overlay: "An astrological compatibility calculator"
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
        <div className="slideshow-container">
            <button className="nav-button" onClick={goToPrevious}>
                ←
            </button>

            <div className="image-crop-box">
                <a href={slides[currentIndex].link} target="_blank" rel="noreferrer">
                    <img
                        src={slides[currentIndex].image}
                        alt={`Slide ${currentIndex + 1}`}
                        className="slide-image"
                    />
                    <div className="hide-text" id='overlay'>
                        {slides[currentIndex].overlay}
                    </div>
                </a>
            </div>

            <button className="nav-button" onClick={goToNext}>
                →
            </button>
        </div>
        <div className="project-title-text">
          {slides[currentIndex].title}
        </div>
    </div>
  );
}