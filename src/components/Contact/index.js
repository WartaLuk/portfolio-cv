import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import Logo from '../Logo'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['C', 'O', 'N', 'T', 'A','C','T', ' ' ,'M', 'E']
  const refForm = useRef;
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    check()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'gmail',
      'service_apol1xs',
      refForm.current,
      'template_2qxks8s'
    )
    .then (
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      alert('Failed to send the message, please try again')
    )
  }

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
            <center>
              <form ref={refForm} onSubmit={sendEmail}>
              {/* <form> */}
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
              <li className='full'>
              <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className='full'>
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
            </form>
            </center>
        </div>
        </div>
      </div>
      <Logo />
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Contact;
