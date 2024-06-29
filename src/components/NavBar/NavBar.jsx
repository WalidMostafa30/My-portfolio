import { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faFileInvoice,
  faHome,
  faImage,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import BarsMenu from "../BarsMenu/BarsMenu";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("PortfolioDarkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const handleNav = () => setShowNav((prev) => !prev);

  const handleDark = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("PortfolioDarkMode", JSON.stringify(darkMode));

    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="NavBar">
      <div className="NavBar__container container">
        <a className="NavBar__logo" href="#Home">
          Walid
        </a>

        <div
          className={showNav ? "NavBar__links open" : "NavBar__links"}
          onClick={handleNav}
        >
          <a className="NavBar__link active" href="#Home">
            <FontAwesomeIcon icon={faHome} />
            Home
          </a>
          <a className="NavBar__link" href="#About">
            <FontAwesomeIcon icon={faUser} />
            About
          </a>
          <a className="NavBar__link" href="#Skills">
            <FontAwesomeIcon icon={faFileInvoice} />
            Skills
          </a>
          <a className="NavBar__link" href="#Services">
            <FontAwesomeIcon icon={faBriefcase} />
            Services
          </a>
          <a className="NavBar__link" href="#Projects">
            <FontAwesomeIcon icon={faImage} />
            Portfolio
          </a>
          <a className="NavBar__link" href="#Contact">
            <FontAwesomeIcon icon={faPaperPlane} />
            Contact
          </a>
        </div>

        <div className="NavBar__icons">
          <div className="NavBar__icon" onClick={handleDark}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </div>

          <BarsMenu className={showNav} onClick={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
