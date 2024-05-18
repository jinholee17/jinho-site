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

export default function CosmicConnection(props: pageProps) {
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
    <div className="cosmic-page">
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
        <h1 className="cosmic-title">Cosmic Connections</h1>
        <p className="bold-cosmic">Hack @ Brown 2024 Hackathon Entry: </p>
        <p className="cosmic-text">
          A star sign compatibility generator! Emails a match an AI generated
          love-letter.
        </p>
        <img className="cosmic-image2" src="/src/assets/images/cosmic.png" />
        <p className="cosmic-text">
          I primarily worked on the backend for this project, which included:
          calculating the 78 combinations of star signs to find each
          compatibility, fetching calls to the Open-AI API to access the
          prompt-to-text model to generate a love letter personalized to the
          person, and emailing it to them using the javax.mail library. We made
          our website using Typescript, React, and Java.
        </p>
        <p className="cosmic-text">
          All four of us on the team were first time hackers so it was a
          challenging process navigating full stack development and working as a
          team in a short period of time to create a large project. All of us
          came into this project with very different skillsets as well. As
          someone who had extremely limited front-end experience prior to this,
          this project was very much a learning curve for me, and it was super
          rewarding in the end.
        </p>
      </div>
      <iframe
        className="cosmic-video"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/MxdVOOskPsU"
        title="Cosmic Connection"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
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
            src="/src/assets/images/square.png"
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
  );
}
