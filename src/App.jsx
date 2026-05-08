import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Works from "./components/Works";
import { GlobalStyles } from "./globalStyles";
import { darkTheme, lightTheme } from "./themes";
import { profileData } from "./data/portfolio";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_LABELS = {
  dark: "Dark Blue",
  light: "Light Blue",
};

export default function App() {
  const location = useLocation();
  const shellRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  });

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handlePointerMove = (event) => {
    if (!shellRef.current) {
      return;
    }

    const bounds = shellRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    shellRef.current.style.setProperty("--pointer-x", `${x}%`);
    shellRef.current.style.setProperty("--pointer-y", `${y}%`);
  };

  const themeConfig = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <div
        ref={shellRef}
        className={`app-shell theme-${theme}`}
        onPointerMove={handlePointerMove}
      >
        <div className="app-shell__aurora app-shell__aurora--one" />
        <div className="app-shell__aurora app-shell__aurora--two" />
        <div className="app-shell__spotlight" />
        <div className="app-shell__grid" />
        <div className="app-shell__grain" />

        <div className="app-shell__frame">
          <header className="app-topbar">
            <div>
              <p className="app-topbar__eyebrow">Light Blue and Dark Blue UI System</p>
              <h1 className="app-topbar__title">Refined Portfolio Experience</h1>
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === "light" ? "dark" : "light"
                )
              }
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              <span className="theme-toggle__meta">
                <span className="theme-toggle__caption">Theme</span>
                <span className="theme-toggle__label">
                  {THEME_LABELS[theme]}
                </span>
              </span>
              <span className="theme-toggle__icon">
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </span>
            </button>
          </header>

          <div className="app-layout">
            <aside className="app-layout__sidebar">
              <Section1 />
            </aside>

            <section className="app-layout__content">
              <Section2 />

              <div key={location.pathname} className="route-stage">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Works />} />
                  <Route path="/Blogs" element={<Blogs />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>

              <footer className="app-footer">
                <span>
                  Crafted with React, cinematic motion, and a premium interface
                  system.
                </span>
                <span>
                  &copy; {new Date().getFullYear()} {profileData.shortName}
                </span>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
