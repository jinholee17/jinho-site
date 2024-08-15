import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import { Link } from "react-router-dom";
import BottomNavBar from "../components/NavBar/BottomNavBar";
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

export default function Website() {
  async function scrollToTop(props: Section) {
    let targetDiv;
    if (props == Section.ABOUTME) {
      targetDiv = document.getElementById("back-home-button");
    } else {
      targetDiv = document.getElementById("hello-text");
    }
    if (targetDiv != null) {
      const targetOffset = targetDiv.offsetTop - 50;
      window.scrollTo({
        top: targetOffset,
        behavior: "instant",
      });
    } else {
      console.error("Could not find target div");
    }
  }

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <NavBar></NavBar>
      <Home></Home>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
