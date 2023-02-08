import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Logo from '../Logo'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = ['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    check()
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alert(
          'Message successfully sent!' +
            '\nI will reply to your email as soon as possible. \nBest regards, \nŁukasz Wartałowicz'
        )
        window.location.reload(true)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
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
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li className="full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li className="full">
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </center>
          </div>
          <div className="contact-form">
            <center>
              <p className="contact-link">
                My mail:{' '}
                <a
                  href="mailto:wartalowicz.lukasz.praca@gmail.com"
                  target="_blank"
                >
                  wartalowicz.lukasz.praca@gmail.com
                </a>
                <br />
              </p>
              <p className="contact-link">
                My phone number:{' '}
                <a href="tel:+48600571533" target="_blank">
                  +48600571533
                </a>
              </p>
            </center>
          </div>
        </div>
      </div>
      <Logo />
    </>
  )
}

export default Contact
