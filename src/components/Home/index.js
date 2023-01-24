
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello,
          <br /> I'm
          <span className='surname'>W</span>
          Lukasz
          <br />
          web developer
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
