import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import Logo from '../Logo/index.js'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const hiArray = ['H', 'e', 'l', 'l', 'o', ',']
  const nameArray = ['L', 'u', 'k', 'a', 's', 'z']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
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
              <h2>Frontend Developer / Javascript Junior</h2>
            </div>

            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <Logo />
      </div>
      {/* <Loader type="cube-transition" /> */}
    </>
  )
}

export default Home
