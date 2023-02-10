import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Cube() {
  return (
    <div className="stage-cube-cont">
      <div className="cube-spinner">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faJs} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
}
