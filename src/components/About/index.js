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
  const titleArray = ['A', 'B', 'O', 'U', 'T', ' ' ,'M', 'E']
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
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            My hobby is theology; sometimes (several times a day) I will draw
            something, but these are rather small sketches; As for sports, I
            think I like chess the most; and I like hiking.
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
