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

export default function LockIn(props: pageProps) {
  async function scrollToPortfolio() {
    await props.setSection(Section.HOME);
    const targetDiv = document.getElementById("lighter-purple-bg");

    if (targetDiv != null) {
      targetDiv.scrollIntoView({ behavior: "instant" });
    } else {
      console.error("Could not find target div");
    }
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="lockin-page">
      <button
        className="back-home-button"
        aria-label="Home Button"
        onClick={() => {
          scrollToPortfolio();
        }}
      >
        -Back to portfolio
      </button>
      <div className="project-text-box">
        <h1 className="cosmic-title">Lock In At Brown</h1>
        <p className="bold-cosmic">
          Software Engineering Course Term Project:{" "}
        </p>
        <p className="cosmic-text">
          A study spot generator! Type in filters for your preferred study
          space, and we will return the best options. Currently based in
          Providence, RI, but can be customized for any area.
        </p>
        <img className="cosmic-image2" src="/src/assets/images/lockedin.png" />
        <p className="cosmic-text">
          I worked on both frontend and backend for this project. Julie and I
          did research and data collection from students at Brown. I worked on
          the ranking algorithm, a point-based system. We use Firestore to store
          user's previous queries. I also did the integration of the frontend
          and backend, making queries and pins on the Mapbox API of the best
          study spots.
        </p>
      </div>
      <button
        className="lockin-square-button"
        aria-label="square button"
        onClick={() =>
          window.open("https://github.com/jinholee17/lockin-at-brown", "_blank")
        }
      >
        <div className="image-container">
          <img
            className="square-image"
            src="/src/assets/images/square.png"
            id="square-image"
          />
          <div className="text-overlay">
            <p className="lockin-square-text" id="square-text">
              Check out the github repo here!
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
