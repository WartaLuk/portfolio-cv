import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
    <img src={LogoS} alt="logo"/>
    <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle"/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="hsl(0, 0%, 84%)"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="hsl(0, 0%, 84%)"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="hsl(0, 0%, 84%)"/>
        </NavLink>
        <a className='github-link' href="https://github.com/WartaLuk" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="hsl(330, 50%, 60%)" target='_blank'/>
        </a>
    </nav>
  </div>
)

export default Sidebar
