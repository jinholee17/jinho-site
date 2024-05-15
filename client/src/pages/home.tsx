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
      <h1 aria-label="Home Title">Home</h1>
    </div>
  );
}
