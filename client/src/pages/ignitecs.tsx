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

export default function Ignite(props: pageProps) {
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
    <div className="ignite-page">
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
        <h1 className="cosmic-title">IgniteCS</h1>
        <p className="cosmic-text">
          I am a program organizer for IgniteCS, which is a computer science
          teaching organization for schools in the Providence area. I organize
          weekly lessons teaching Scratch and HTML at Sophia Academy, a middle
          school in Providence.
        </p>
        <img className="cosmic-image2" src="/src/assets/images/ignitecs.png" />
        <p className="cosmic-text">
          I also worked on some frontend for our new website. This was through
          Full Stack at Brown, a club that creates websites/software for other
          clubs at Brown. Through this experience, I got to see firsthand the
          process of a team creating a lo-fi design of a website, to a full
          sketch on figma, to bringing it to fruition in Typescript and React.
        </p>
        <p className="cosmic-text">
          I integrated the Cosmic API into the website, in order to make it
          easier for our team to edit website content freely and easily.
        </p>
      </div>
      <div className="ignite-bottom">
        <button
          className="lockin-square-button"
          aria-label="square button"
          onClick={() => window.open("https://ignite-cs.vercel.app/", "_blank")}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/src/assets/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="lockin-square-text" id="square-text">
                Check out the website here!
              </p>
            </div>
          </div>
        </button>
        <div className="ignite-team">
          <img
            className="ignite-team-pic"
            src="/src/assets/images/ignite-team.jpg"
          />
          <p className="ignite-team-text">My team at Sophia Academy!</p>
        </div>
      </div>
    </div>
  );
}
