import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function SeaIce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="asl-page">
      <div className="project-text-box">
        <h1 className="cosmic-title">Arctic Sea Ice Melting Prediction</h1>
        <p className="bold-cosmic">Deep Learning Course Term Project</p>
        <p className="cosmic-text">
            With Arctic ecosystems threatened by rapid climate change, we built models to predict sea ice extent using satellite imagery and climate data.
        </p>
        <img className="cosmic-image2" src="/static/images/sea-ice.png" />
        <p className="bold-cosmic">
           We reimplemented a research paper (ACM) using two neural architectures:
        </p>
        <p className="cosmic-text">
            1D LSTM Model on time series data (NSIDC) augmented with ERA5 climate variables (temperature, pressure, precipitation, heat flux).
        </p>
        <p className="cosmic-text">
            2D CNN-LSTM Model on satellite images (Copernicus), enriched with the same ERA5 variables. We also applied Discrete Wavelet Transforms (DWTs) to enhance spatial and temporal feature extraction.
        </p>
        <p className="bold-cosmic">
            Model Highlights
        </p>
        <p className="cosmic-text">
            1D LSTM: Captured seasonal sea ice trends well but struggled with sharp spikes—typical of LSTM limitations.
        </p>
        <p className="cosmic-text">
            2D CNN-LSTM: Accurately modeled both spatial and temporal patterns. Achieved MAE of 0.0647 on validation data after 10 epochs, showing strong generalization.
        </p>
        <p className="bold-cosmic">
        Key Takeaways
        </p>
        <p className="cosmic-text">
        Combining spatial and temporal data significantly improves prediction accuracy.

        DWTs enhance the model’s understanding of complex patterns.

        Preprocessing heterogeneous datasets remains a key challenge.

        Sea ice is melting—quickly and consistently.
        </p>
        <img className="cosmic-image2" src="/static/images/sea-poster.png" />
        <p className="cosmic-text">
        My collaborators were Kamya Raman and Duru Huseyni!
        Check out the Github repo by clicking the button below!
        </p>
      </div>
      <button
        className="lockin-square-button"
        aria-label="square button"
        onClick={() =>
          window.open("https://github.com/jinholee17/sea-ice-predictor", "_blank")
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
