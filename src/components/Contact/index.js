import '../About/index.scss'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import Logo from '../Logo'
import emailjs from '@emailjs/browser'

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID,
      TEMPLATE_ID,
     form.current,
      PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
                {/* <form> */}
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
                      name="messasge"
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
        </div>
      </div>
      <Logo />
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Contact
