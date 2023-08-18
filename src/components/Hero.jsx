import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

import data from "../icons/light/lightIcons.json";

import linkedIn_LIGHT from "../icons/social/LinkedIn-Light.svg";
import twitter_LIGHT from "../icons/social/Twitter-Light.svg";
import gitHub_LIGHT from "../icons/social/GitHub-Light.svg";
import resume_LIGHT from "../icons/social/Resume-Light.svg";

import linkedIn_DARK from "../icons/social/LinkedIn-Dark.svg";
import twitter_DARK from "../icons/social/Twitter-Dark.svg";
import gitHub_DARK from "../icons/social/GitHub-Dark.svg";
import resume_DARK from "../icons/social/Resume-Dark.svg";

export default function Hero() {
  const {isLightTheme} = useContext(ThemeContext)

  const style = {
    darkModeText: { color: isLightTheme ? "white" : "black" },
    fill: isLightTheme ? "white" : "black",
    abtBtn: { border: "2px solid #fff" },
  };
  
  return (
    <div className="homepage">
      <div className="location">
        <div className="location-college">
          <svg
            xmlns={data.homepage.location.svg.xmlns}
            width={data.homepage.location.svg.width}
            height={data.homepage.location.svg.height}
            viewBox={data.homepage.location.svg.viewBox}
            fill={data.homepage.location.svg.none}
            className="location-college-icon"
          >
            <path d={data.homepage.location.path.d} fill={style.fill} />
          </svg>
          <p className="location-college-detail" style={style.darkModeText}>
            Student, BITS GOA
          </p>
        </div>
        <div className="location-intern">
          <svg
            xmlns={data.homepage.work.svg.xmlns}
            width={data.homepage.work.svg.width}
            height={data.homepage.work.svg.height}
            viewBox={data.homepage.work.svg.viewBox}
            fill={data.homepage.work.svg.none}
            className="location-intern-icon"
          >
            <path d={data.homepage.work.path.d} fill={style.fill} />
          </svg>
          <p className="location-intern-detail" style={style.darkModeText}>
            Intern at MBB Labs, Bengaluru
          </p>
        </div>
      </div>

      <div className="hero-main">
        <div className="hero-main-left">
          <div className="hero-title">
            <h1 className="hero-title-name" style={style.darkModeText}>
              Hi, I am
              <br />
              Shlok Sinha.
            </h1>
            <p className="hero-title-by" style={style.darkModeText}>
              Developer | Designer | Otaku
            </p>
          </div>
          {/* <div className="hero-btn">
            <button className="abt-btn" style={style.abtBtn}>
              About me
            </button>
            <button className="cntc-btn">Connect!</button>
          </div> */}
          <div className="hero-links">
            {/* LINKED IN */}
            <a className="social-link" href="https://www.linkedin.com/in/shlok-sinha-8297ba204/" target="_blank">
            <img
              href="https://www.linkedin.com/in/shlok-sinha-8297ba204/"
              src={isLightTheme ? linkedIn_DARK : linkedIn_LIGHT}
              alt="HTML"
              className="hero-link-item"
            />
            </a>
            <a className="social-link" href="https://twitter.com/SinhaShlok12/" target="_blank">
            <img
              src={isLightTheme ? twitter_DARK : twitter_LIGHT}
              alt="HTML"
              className="hero-link-item"
            />
            </a>
            <a className="social-link" href="https://github.com/sinhashlok" target="_blank">
            <img
              src={isLightTheme ? gitHub_DARK : gitHub_LIGHT}
              alt="HTML"
              className="hero-link-item"
            />
            </a>
            <a className="social-link" href="https://drive.google.com/file/d/1z-ESgGkS8peBcRzC9phd3rdZVYE99MPK/view?usp=sharing" target="_blank">
            <img
              src={isLightTheme ? resume_DARK : resume_LIGHT}
              alt="HTML"
              className="hero-link-item"
            />
            </a>
          </div>
        </div>
        <div className="hero-main-right">
          <img
            src="../public/images/HomepageImage.png"
            className="heroImage"
          ></img>
        </div>
      </div>
    </div>
  );
}
