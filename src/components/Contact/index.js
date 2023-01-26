import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['C', 'O', 'N', 'T', 'A','C','T', ' ' ,'M', 'E']
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
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Contact;
