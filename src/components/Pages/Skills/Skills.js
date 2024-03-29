import "./Skills.scss";
import AnimatedLetters from "../../Common/AnimatedLetters/AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMale } from "@fortawesome/free-solid-svg-icons";
import Cube from "../../Common/Cube/Cube";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = ["M", "Y", "", "S", "K", "i", "L", "L", " S"];
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    }
    check();
  }, []);
  return (
    <>
      <div className="skills-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={12}
          />
        </h1>
        <div className="text-zone">
          <div className="part">
            <h4>
              JavaScript{" "}
              <FontAwesomeIcon icon={faCode} color="&element-color-two" />
            </h4>
            <div>
              <p>Handlebars</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>Websocket</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div className="part">
            <h4>
              HTML & CSS{" "}
              <FontAwesomeIcon icon={faCode} color="&element-color-two" />
            </h4>
            <div>
              <p>SCSS</p>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="part">
            <h4>
              Soft skills{" "}
              <FontAwesomeIcon icon={faMale} color="&element-color-two" />
            </h4>
            <div>
              <p>creativity</p>
              <p>communicativeness</p>
              <p>analytical thinking</p>
              <p>adaptability</p>
            </div>
          </div>
          <div className="part portfolio"></div>
        </div>
      </div>
      <Cube />
    </>
  );
};

export default Skills;
