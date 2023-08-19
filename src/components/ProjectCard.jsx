import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function ProejctCard(props) {
  const { isLightTheme } = useContext(ThemeContext);

  const style = {
    darkModeText: { color: isLightTheme ? "white" : "black" },
    darkModeBg: { backgroundColor: isLightTheme ? "black" : "white" },
  };

  return (
    <div
      className="card "
      style={{
        backgroundColor: isLightTheme ? "black" : "white",
        borderColor: isLightTheme ? "white" : "black",
      }}
    >
      <div
        className="card-img"
        style={{
          backgroundImage: `${props.imgLink}`,
        }}
      >
        <img src={props.imgLink} className="img"></img>
      </div>
      <div className="card-details">
        <h2 className="card-name" style={style.darkModeText}>
          {props.name}
        </h2>
        <p className="tech" style={style.darkModeText}>
          Tech
        </p>
        <p className="card-tech" style={style.darkModeText}>
          {props.tech}
        </p>
        <div className="card-btns">
          <a
            style={{
              display: props.link == null ? "none" : "inline",
              borderColor: isLightTheme ? "white" : "none",
            }}
            href={props.link}
            className="card-btn-link"
            target="_blank"
          >
            Live Link
          </a>
          <a
            style={{
              display: props.gitHub == null ? "none" : "inline",
              backgroundColor: isLightTheme ? "white" : "none",
            }}
            href={props.gitHub}
            className="card-btn-github"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
