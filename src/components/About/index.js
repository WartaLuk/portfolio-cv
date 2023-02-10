import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index.js";
import { useState, useEffect } from "react";
import Logo from "../Logo";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = ["A", "B", "O", "U", "T", " ", "M", "E"];
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    }
    check();
  }, []);
  return (
    <div className="scroll">
      <div className="container about-page">
        <div className="tex-zone">
          <h1>
            <AnimatedLetters
              className="page-title"
              letterClass={letterClass}
              strArray={titleArray}
              idx={12}
            />
          </h1>
          <div className="about-me">
            <p>
              I am 24 years old and I would like to start by saying that I am a
              versatile person. The proof of this may be that I graduated from a
              chemical technical school, during which I took part in an Erasmus
              exchange three times, including one internship in a microbiology
              laboratory in Sevilla.
            </p>
            <p>
              After graduating from high school in mathematics, biology and
              chemistry, however, I decided to learn the law, which I studied
              for 2 years. These two seemingly different worlds taught me
              analytical thinking, creativity, self-confidence and looking at
              the world from different perspectives.
            </p>
            <p>
              I am sure that these experiences and acquired skills will help me
              in my career as a web developer, especially in solving problems.
            </p>
            <p>
              The eternal desire to learn new things and my curiosity about how
              the surrounding world works led me to learn to program.
            </p>
            <p>
              I quickly became interested in how websites and applications work.
              I had a lot of fun creating and solving the difficulties I
              encountered. The most important thing for me is that almost all my
              previous interests are connected with the newly started
              professional path, which, I believe, will allow me to derive
              satisfaction from working with passion.
            </p>
            <p>
              I encourage you to check out my work:{" "}
              <p>
                <a
                  href="https://github.com/WartaLuk/New-Wave-Festival"
                  target="_blank"
                >
                  New Wave Festival
                </a>{" "}
                <a href=" https://github.com/WartaLuk/BlogAPP" target="_blank">
                  Blog application
                </a>{" "}
                <a
                  href="https://github.com/WartaLuk/project-pizzeria"
                  target="_blank"
                >
                  Pizzeria Website
                </a>
              </p>
            </p>
          </div>
          <p>
            <hr />
          </p>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default About;
