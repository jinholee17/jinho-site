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
        <p className="bold-cosmic">Software Engineering Course Term Project:</p>
        <p className="cosmic-text">
          A study spot generator! Type in filters for your preferred study
          space, and we will return the best options. Currently based in
          Providence, RI, but can be customized for any area.
        </p>
        <div>
          <video className="lockin-video" width="600" autoPlay loop>
            <source
              src="/src/assets/images/lockin-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <img className="cosmic-image2" src="/src/assets/images/lockedin.png" /> */}
        <p className="cosmic-text">
          I worked on both frontend and backend for this project. Julie and I
          did research and data collection from students at Brown. This required
          surveying students on their favorite study spots, and making sure to
          get a breadth of majors and identities.
        </p>
        <p className="cosmic-text">
          I worked on the ranking algorithm, a point-based matching system. It
          reads in a csv file of study spots, and parses them into objects
          making it easy to add/change data as needed.
        </p>
        <p className="cosmic-text">
          We use Firestore to store user's previous queries, so that your
          history saves on logout. I implemented the Geolocation API in order to
          cater results to users' location. We also used the Yelp rating API to
          fetch ratings of applicable study spots, which I convert into the
          stars on the frontend. I did the integration of the frontend and
          backend, making queries and pins on the Mapbox API of the best study
          spots returned from the backend.
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
