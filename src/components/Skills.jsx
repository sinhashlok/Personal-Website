import JAVA from "../icons/skills/language/JAVA.svg";

import HTML from "../icons/skills/frontend/HTML.svg";
import CSS from "../icons/skills/frontend/CSS.svg";
import JS from "../icons/skills/frontend/JS.svg";
import Bootstrap from "../icons/skills/frontend/Bootstrap.svg";
import React from "../icons/skills/frontend/React.svg";

import Mongodb from "../icons/skills/backend/Mongodb.svg";
import Mongoose_Light from "../icons/skills/backend/Mongoose.svg";
import Node_Light from "../icons/skills/backend/Node-Light.svg";
import Node_Dark from "../icons/skills/backend/Node-Dark.svg";
import Mongoose_Dark from "../icons/skills/backend/Mongoose-Dark.svg";

import GIT from "../icons/skills/tools/Git.svg";
import GITHUB_LIGHT from "../icons/skills/tools/GitHub-Light.svg";
import GITHUB_DARK from "../icons/skills/tools/GitHub-Dark.svg";
import VS from "../icons/skills/tools/VS.svg";
import INTELLI from "../icons/skills/tools/Intelli.svg";
import POSTMAN from "../icons/skills/tools/Postman.svg";
import FIGMA from "../icons/skills/tools/Figma.svg";

import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

export default function Skills() {
  const { isLightTheme } = useContext(ThemeContext);
  const style = {
    darkModeText: { color: isLightTheme ? "white" : "black" },
  };

  return (
    <div>
      <h1 className="skills-title" style={style.darkModeText}>
        SKILLS
      </h1>
      <div className="skills-list">
        <div className="skills-list-item">
          <h4 className="skill-list-name langauge" style={style.darkModeText}>
            language
          </h4>
          {/* Java */}
          <img src={JAVA} alt="JAVA" className="skill-icon" />
        </div>
        <div className="skills-list-item">
          <h4 className="skill-list-name frontend" style={style.darkModeText}>
            frontend
          </h4>
          <img src={HTML} alt="HTML" className="skill-icon" />
          <img src={CSS} alt="CSS" className="skill-icon" />
          <img src={JS} alt="JS" className="skill-icon" />
          <img src={Bootstrap} alt="BS" className="skill-icon" />
          <img src={React} alt="REACT" className="skill-icon" />
          {/* HTML */}
        </div>
        <div className="skills-list-item">
          <h4 className="skill-list-name backend" style={style.darkModeText}>
            backend
          </h4>
          <img
            src={isLightTheme ? Node_Dark : Node_Light}
            alt="NODE"
            className="skill-icon"
          />
          <img src={Mongodb} alt="MONGODB" className="skill-icon" />
          <img
            src={isLightTheme ? Mongoose_Dark : Mongoose_Light}
            alt="MONGOOSE"
            className="skill-icon"
          />
        </div>
        <div className="skills-list-item">
          <h4 className="skill-list-name langauge" style={style.darkModeText}>
            tools
          </h4>
          <img src={GIT} alt="GIT" className="skill-icon" />
          <img
            src={isLightTheme ? GITHUB_DARK : GITHUB_LIGHT}
            alt="GITHUB"
            className="skill-icon"
          />
          <img src={VS} alt="VS" className="skill-icon" />
          <img src={INTELLI} alt="INTELLI" className="skill-icon" />
          <img src={POSTMAN} alt="POSTMAN" className="skill-icon" />
          <img src={FIGMA} alt="FIGMA" className="skill-icon" />
        </div>
      </div>
    </div>
  );
}
