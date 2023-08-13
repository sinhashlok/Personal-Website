import Hero from "../components/Hero";
import Skills from "../components/Skills";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const darkMode = location.search.darkMode;
  const style = {
    darkModeBg: { backgroundColor: darkMode ? "black" : "white" },
  };

  return (
    <div style={style.darkModeBg}>
      <img
        src="../public/images/strawHat/strawHat.png"
        className="strawHatTop"
      />
      <img
        src="../public/images/strawHat/strawHatMid.png"
        className="strawHatMid"
      />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
    </div>
  );
}
