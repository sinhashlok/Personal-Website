import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function About() {
  const {isLightTheme} = useContext(ThemeContext);

  const style = {
    darkModeText: { color: isLightTheme ? "white" : "black" },
    fill: isLightTheme ? "white" : "black",
    darkModeBg: { backgroundColor: isLightTheme ? "black" : "white" }
  };

  return (
    <div className="about" style={style.darkModeBg}>
      <div className="abt-left">
        <h1 className="abt-hi" style={style.darkModeText}>
          Hi <span className="abt-wave">👋</span>
        </h1>
        <div className="abt-content">
          <h1 className="abt-me-tag" style={style.darkModeText}>{`<me>`}</h1>
          <p className="abt-me-content" style={style.darkModeText}>
            “ I am a <span style={{ color: "red" }}>final year</span> BE
            Mechanical Engineering student at BITS Goa. I am currently doing an{" "}
            <span style={{ color: "red" }}>internship</span> at MBB Labs as a{" "}
            <span style={{ color: "red" }}>Product Engineer</span>.
            <br /> <br />I have <span style={{ color: "green" }}>
              interest
            </span>{" "}
            in Web Development, design, dance, anime & football. I also enjoy
            reading non-fiction & manga. I started my coding / development
            journey in first year and then I explored UI/UX design.
            <br /> Currently, I am learning React and also exploring DevOps and
            learning about Docker and Kubernetes.”
          </p>
          <h1 className="abt-me-tag" style={style.darkModeText}>{`</me>`}</h1>
        </div>
      </div>
      <div className="abt-right">
        <img src="./images/AbtPageImage.png" className="abtImage" />
      </div>
    </div>
  );
}
