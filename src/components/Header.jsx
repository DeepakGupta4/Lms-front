import { Link, useLocation } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";
import { FaCloudMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "false";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", false);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", true);
    }
  }, [darkMode]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobile(false);
  };

  const handleMobileOpen = () => {
    setMobile(!mobile);
  };

  const handleMobileClose = () => {
    setMobile(false);
  };

  return (
    <>
      <header>
        <nav className="container flex flex-sb">
          <div className="logo flex gap-2">
            <Link to="/">
              <h2>Deepak Gupta</h2>
            </Link>
          </div>
          <div className="navlist flex gap-2">
            <ul className="flex gap-2">
              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => handleLinkClick("/services")}
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => handleLinkClick("/projects")}
                  className={activeLink === "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => handleLinkClick("/gallery")}
                  className={activeLink === "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={activeLink === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="darkmodetoggle" onClick={toggleDarkMode}>
              {darkMode ? <FaCloudMoon /> : <LuSun />}
            </div>
            <button>
              <Link to="/contact">Hire Me!</Link>
            </button>
            <div className="mobiletogglesvg" onClick={handleMobileOpen}>
              <HiMiniBars3BottomRight />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
            <span
              onClick={handleMobileClose}
              className={mobile ? "active" : ""}
            ></span>
            <div className="mobilelogo">
              {/* <img src="/img/white.png" alt="logo" /> */}
              <h2>Deepak Gupta</h2>
            </div>
            <ul
              className="flex gap-1 flex-col flex-left mt-3"
              onClick={handleMobileClose}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => handleLinkClick("/services")}
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => handleLinkClick("/projects")}
                  className={activeLink === "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => handleLinkClick("/gallery")}
                  className={activeLink === "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={activeLink === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p>Copyright &copy; 2025 | Deepak</p>
          </div>
        </nav>
      </header>
    </>
  );
}
