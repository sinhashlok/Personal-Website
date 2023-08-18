import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

export default function Home() {
  const {isLightTheme} = useContext(ThemeContext);
  const style = {
    darkModeBg: { backgroundColor: isLightTheme ? "black" : "white" },
  };


  return (
    <div style={style.darkModeBg} className="home">
      <img
        src="../public/images/strawHat/strawHat.png"
        className="strawHatTop"
      />
      <img
        src="../public/images/strawHat/strawHatMid.png"
        className="strawHatMid"
      />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
