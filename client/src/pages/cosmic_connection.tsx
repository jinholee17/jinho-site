export default function CosmicConnection() {
  return (
    <div className="project">
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
              Cosmic Connection
            </p>
          </div>
        </div>
      </button>
      <div className="project-text">
        <p className="cosmic-text">
          <span className="bold-sans">Hack @ Brown 2024 Entry: </span>A star
          sign compatibility generator! Emails a match an AI generated
          love-letter.
        </p>
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
      </div>
    </div>
  );
}
