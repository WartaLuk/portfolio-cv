import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo'

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
          <div className="contact-form">
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
              <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className='half'>
              <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className='half'>
                <textarea
                  placeholder="Message"
                  name="messasge"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND"/>
              </li>
            </ul>
        </div>
        <hr/>
        </div>
      </div>
      <Logo />
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Contact;
