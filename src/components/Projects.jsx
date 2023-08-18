import ProejctCard from "./ProjectCard";
import projectsData from "../projectsData.json";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";


const devData = Object.entries(projectsData.dev);
console.log(devData);
ProejctCard


export default function () {
  const { isLightTheme } = useContext(ThemeContext);

  const style = {
    darkModeText: { color: isLightTheme ? "white" : "black" },
  };

  return (
    <div className="projects">
      <h1 className="project-header" style={style.darkModeText}>PROJECTS</h1>
      <div className="development">
        <h1 className="project-title"style={style.darkModeText}>DEVELOPMENT</h1>
        <div className="project-cards">
        {devData.map(data => {
            const name = data[1].name;
            const tech = data[1].tech;
            const link = data[1].link;
            const gitHub = data[1].github;
            const imgLink = data[1].img;
            return <ProejctCard name={name} tech={tech} link={link} gitHub={gitHub} imgLink={imgLink}/>
        })}
        </div>
      </div>
    </div>
  );
}
