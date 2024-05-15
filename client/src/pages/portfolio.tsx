import { useState } from "react";
import Home from "./home";

enum Section {
  HOME = "HOME",
  PORTFOLIO = "PORTFOLIO",
}

export default function Portfolio() {
  const [section, setSection] = useState<Section>(Section.HOME);

  return (
    <div>
      <h1 aria-label="portfolio page">portfolio</h1>
    </div>
  );
}
