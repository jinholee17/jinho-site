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
      <h1 aria-label="Home Text" className="home-text">
        Hi! I’m Jinho! I’m a developer studying computer science at Brown
        University. I’m passionate in the intersection of software and human
        interaction, as well as storytelling. Welcome to my website!
      </h1>
    </div>
  );
}
