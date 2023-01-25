
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const hiArray = ['H', 'e', 'l', 'l', 'o', ',']
  const nameArray = ['L', 'u', 'k', 'a', 's', 'z']
  const jobArray = ['w', 'e', 'b', '','d','e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
useEffect(() => { async function check () {return setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)} check ()}, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass}
          strArray={hiArray} idx={12}/>
          <br/>
          <span className={letterClass} _12>I</span>
          <span className={letterClass} _13>'</span>
          <span className={letterClass} _14>m</span>
          <span className='surname'>W</span>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray} idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray} idx={22}/>
        </h1>
        <h2>Frontend Developer / Javascript Junior</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
