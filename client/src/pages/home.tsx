import { useState } from "react";
import Portfolio from "./portfolio";

enum Section {
  HOME = "HOME",
  PORTFOLIO = "PORTFOLIO",
}

export default function Home() {
  const [section, setSection] = useState<Section>(Section.HOME);

  return (
    <div>
      <h1 aria-label="Introduction Text" className="hello-text">
        Hi! I’m <span class=bold-sans >Jinho!</span>
      </h1>
      <h1 aria-label="Home Text" className="home-text">
        I’m a full-stack developer studying computer science and literary arts
        at Brown University. I'm interested in the intersections of CS and
        language, as well as creating accessible computer science education.
      </h1>
      <h1 aria-label="Home Text" className="home-text">
        Welcome to my website!
      </h1>
    </div>
  );
}
