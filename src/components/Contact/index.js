import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    check()
  }, [])
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            className="page-title"
            letterClass={letterClass}
            strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
            idx={15}
          />
        </h1>
        <p>
          My hobby is theology; sometimes (several times a day) I will draw
          something, but these are rather small sketches; As for sports, I think
          I like chess the most; and I like hiking.
        </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="messasge"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
