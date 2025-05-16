import { Link } from "react-router-dom";
import { useEffect } from "react";

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

export default function Ignite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ignite-page">
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
        <h1 className="cosmic-title">IgniteCS</h1>
        <p className="cosmic-text">
          I am a program organizer for IgniteCS, which is a computer science
          teaching organization for schools in the Providence area. I organize
          weekly lessons teaching Scratch and HTML at Sophia Academy, a middle
          school in Providence.
        </p>
        <img className="cosmic-image2" src="/static/images/ignitecs.png" />
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
          className="ignite-square-button"
          aria-label="square button"
          onClick={() => window.open("https://ignite-cs.vercel.app/", "_blank")}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/static/images/square.png"
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
            src="/static/images/ignite-team.jpg"
          />
          <p className="ignite-team-text">My team at Sophia Academy!</p>
        </div>
      </div>
      <div >
      <div className="project-text-box">
        <h1 className="cosmic-title">Brown Student Radio</h1>
        <p className="cosmic-text">
          Another site I helped develop for Full Stack At Brown was the new Brown Student Radio site.
        </p>
        <p className="cosmic-text">
          This was their old site, which was a little outdated and needed some revamping.
        </p>
        <img className="cosmic-image3" src="/static/images/bsr1.png" />
        <p className="cosmic-text">
          And this was the site we created! The designers did a great job at working with our client
          picking a style that was clean, cool, and professional. I worked on the frontend for this site,
          integrating the Muses Radio Player API so that users can listen to the live BSR radio feed from
          the website.
        </p>
        <img className="cosmic-image3" src="/static/images/bsr2.png" />
      </div>
      <div className="ignite-bottom">
      <button
          className="ignite-square-button"
          aria-label="square button"
          onClick={() => window.open("https://https://brownstudentradio.vercel.app/", "_blank")}
        >
          <div className="image-container">
            <img
              className="square-image"
              src="/static/images/square.png"
              id="square-image"
            />
            <div className="text-overlay">
              <p className="lockin-square-text" id="square-text">
                Check out the website here!
              </p>
            </div>
          </div>
        </button>
      </div>
      </div>
    </div>
  );
}
