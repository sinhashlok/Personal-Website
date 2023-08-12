import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";
import Skills from "./components/Skills";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  const style = {
    darkModeBg: { backgroundColor: darkMode ? "black" : "white" },
  };

  console.log(darkMode);

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
      <Navbar onClick={handleClick} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
    </div>
  );
}
