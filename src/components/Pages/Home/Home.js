import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import Logo from "../../Common/Logo/Logo";
import AnimatedLetters from "../../Common/AnimatedLetters/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const hiArray = ["H", "e", "l", "l", "o", ","];
  const nameArray = ["L", "u", "k", "a", "s", "z"];
  const jobArray = [
    "w",
    "e",
    "b",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
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
      <div className="container home-page">
        <div className="text-zone">
          <div className="main-container">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={hiArray}
                idx={12}
              />
              <br />
              <span className={letterClass}>I</span>
              <span className={letterClass}>'</span>
              <span className={letterClass}>m</span>
              <span className="surname">W</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <div className="typewriter job">
              <h2>
                Frontend Developer /<br className="phone-media" /> Javascript
                Junior
              </h2>
            </div>

            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default Home;
