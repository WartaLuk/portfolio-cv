import { NavLink } from "react-router-dom";
import "./index.scss";
import LogoW from "../../assets/images/logo-w-color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <img src={LogoW} alt="logo" className="logo" />
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="skills-link"
        to="/skills"
      >
        <FontAwesomeIcon icon={faCode} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
      <a
        className="github-link"
        href="https://github.com/WartaLuk"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} target="_blank" />
      </a>
    </nav>
  </div>
);

export default Sidebar;
