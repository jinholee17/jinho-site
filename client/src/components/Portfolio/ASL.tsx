import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ASL() {
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
    <div className="asl-page">
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
        <h1 className="cosmic-title">American Sign Language Interpreter</h1>
        <p className="bold-cosmic">Computer Vision Course Term Project (Fall 2024):</p>
        <p className="cosmic-text">
          We wanted to create an ASL interpreter that can take in
          an image of a letter in ASL and identify which letter it is. We
          wanted to figure out whether traditional CV algorithms or a
          CNN would perform better at this task, so we implemented
          both.
        </p>
        <img className="cosmic-image2" src="/static/images/asl.png" />
        <p className="cosmic-text">
          For our traditional CV approach, we used the bag of
          words image classifier with an SVM classifier.
          For our CNN approach, we used two different strategies.
          One was a fully built traditional convolutional neural network with
          linear convolutional and max pooling layers. The
          other model was our fine-tuned pretrained model which was
          a version of the ResNet-18 model. ResNet-18 is a CNN
          with 18 layers used for image classification for over 1,000
          categories and trained on a large database. For our custom
          version we froze all the layers except the last and then replaced
          the final layer with a custom classifier for the specific
          number of classes in the dataset.
        </p>
        <p className="cosmic-text">
        Our training and testing data is entirely from a Kaggle
        dataset called asl alphabet. It includes 3000 images per letter,
        plus 3000 images for each of "space” and "nothing."
        Because of space limitations, we only used 40 images per
        character rather than the entire dataset.
        </p>
        <img className="asl-image" src="/static/images/asl_m.jpg" />
        <img className="asl-image" src="/static/images/asl_l.jpg" />
        <p className="cosmic-text">
        Our final test accuracy using the SVM approach was
        85.7%, meaning that on our test data, 85.7% of images of
        ASL characters were classified correctly. For our custom
        CNN model, after 50 epochs, our highest training accuracy was 100%.
        </p>
        <p className="cosmic-text">
          Click to watch the full demo here!
        </p>
        <div className="lockin-video-div" onClick={handleVideoClick} >
          <video className="asl-video" loop ref={videoRef}
          >
            <source src="/static/videos/asl.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="cosmic-text">
        My collaborators were Natalie King, Sylvie Watts, and Domingo Viesca! Special thanks to Professor Sridhar as well.
        Check out the Github repo by clicking the button below!
        </p>
      </div>
      <button
        className="lockin-square-button"
        aria-label="square button"
        onClick={() =>
          window.open("https://github.com/jinholee17/asl-interpreter", "_blank")
        }
      >
        <div className="image-container">
          <img
            className="square-image"
            src="/static/images/square.png"
            id="square-image"
          />
          <div className="text-overlay">
            <p className="lockin-square-text" id="square-text">
              checkout the github repo here!
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
