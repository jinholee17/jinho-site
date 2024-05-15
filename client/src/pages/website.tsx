import { useState } from "react";
import Portfolio from "./portfolio";
import Home from "./home";

enum Section {
  HOME = "HOME",
  PORTFOLIO = "PORTFOLIO",
}

export default function Website() {
  const [section, setSection] = useState<Section>(Section.HOME);

  return (
    <div>
      <h1 aria-label="Gearup Title">Home</h1>
      <button onClick={() => setSection(Section.HOME)}>Jinho Lee</button>
      <button onClick={() => setSection(Section.PORTFOLIO)}>Portfolio</button>
      {section === Section.HOME ? <Home /> : null}
      {section === Section.PORTFOLIO ? <Portfolio /> : null}
    </div>
  );
}
