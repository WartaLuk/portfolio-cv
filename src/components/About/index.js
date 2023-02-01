
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    check()
  }, [])
  return (
    <>
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
          <p>
            I am a young, ambitious web developer who is looking for his first
            job in IT.
          </p>
          <p>
            What characterizes me is: commitment, analytical thinking,
            creativity and the fact that I'm not afraid to ask questions if I
            don't know something.
          </p>
          <p>
            In my free time, I love to study and analyze the books of the Bible.
            My other passions, I've been drawing and swimming since childhood,
            and I've been playing chess for several years...
          </p>
          <p>
            <hr />
          </p>
        </div>
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
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
