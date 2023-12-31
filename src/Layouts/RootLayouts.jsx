import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

export default function RootLayouts() {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="root-layouts">
      <header>
        <nav>
          <NavLink to="/" className="nav-title">
            Shlok Sinha
          </NavLink>
          <div className="nav-items">
            <NavLink
              className="nav-item"
              to="about"
            >
              ABOUT
            </NavLink>
            {/* <NavLink className="nav-item" to="conact">CONTACT</NavLink> */}
            <button className="nav-toggle-btn" onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                className="nav-toggle-icon"
                style={{ display: isLightTheme ? "none" : "block" }}
              >
                <path
                  d="M7 0H15C15.9193 -1.36979e-08 16.8295 0.18106 17.6788 0.532843C18.5281 0.884626 19.2997 1.40024 19.9497 2.05025C20.5998 2.70026 21.1154 3.47194 21.4672 4.32122C21.8189 5.17049 22 6.08075 22 7C22 7.91925 21.8189 8.8295 21.4672 9.67878C21.1154 10.5281 20.5998 11.2997 19.9497 11.9497C19.2997 12.5998 18.5281 13.1154 17.6788 13.4672C16.8295 13.8189 15.9193 14 15 14H7C6.08075 14 5.1705 13.8189 4.32122 13.4672C3.47194 13.1154 2.70026 12.5998 2.05025 11.9497C1.40024 11.2997 0.884626 10.5281 0.532843 9.67878C0.18106 8.8295 0 7.91925 0 7C0 6.08075 0.18106 5.17049 0.532843 4.32122C0.884626 3.47194 1.40024 2.70026 2.05025 2.05025C2.70026 1.40024 3.47194 0.884626 4.32122 0.532843C5.1705 0.18106 6.08075 -1.36979e-08 7 0ZM15 10C15.7956 10 16.5587 9.68393 17.1213 9.12132C17.6839 8.55871 18 7.79565 18 7C18 6.20435 17.6839 5.44129 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                className="nav-toggle-icon"
                style={{ display: isLightTheme ? "block" : "none" }}
              >
                <path
                  d="M16 14.9999L8 14.9999C7.08075 14.9999 6.1705 14.8189 5.32122 14.4671C4.47194 14.1153 3.70026 13.5997 3.05025 12.9497C2.40024 12.2997 1.88463 11.528 1.53284 10.6787C1.18106 9.82944 1 8.91919 1 7.99994C1 7.08068 1.18106 6.17043 1.53284 5.32115C1.88463 4.47187 2.40024 3.7002 3.05025 3.05019C3.70026 2.40018 4.47194 1.88456 5.32122 1.53278C6.1705 1.181 7.08075 0.999938 8 0.999938L16 0.999939C16.9193 0.999939 17.8295 1.181 18.6788 1.53278C19.5281 1.88456 20.2997 2.40018 20.9497 3.05019C21.5998 3.7002 22.1154 4.47188 22.4672 5.32116C22.8189 6.17043 23 7.08069 23 7.99994C23 8.91919 22.8189 9.82944 22.4672 10.6787C22.1154 11.528 21.5998 12.2997 20.9497 12.9497C20.2997 13.5997 19.5281 14.1153 18.6788 14.4671C17.8295 14.8189 16.9193 14.9999 16 14.9999ZM8 4.99994C7.20435 4.99994 6.44129 5.31601 5.87868 5.87862C5.31607 6.44123 5 7.20429 5 7.99994C5 8.79559 5.31607 9.55865 5.87868 10.1213C6.44129 10.6839 7.20435 10.9999 8 10.9999C8.79565 10.9999 9.55871 10.6839 10.1213 10.1213C10.6839 9.55865 11 8.79559 11 7.99994C11 7.20429 10.6839 6.44123 10.1213 5.87862C9.55871 5.31601 8.79565 4.99994 8 4.99994Z"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
