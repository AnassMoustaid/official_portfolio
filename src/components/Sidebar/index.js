import './index.scss'
import LogoS from '../../assets/images/am_logo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBriefcase, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <Link exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
        <Link activeclassname="active" className="work-link" to="/work">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </Link>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anass-moustaid-b92326231/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnassMoustaid"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://anassmoustaid.github.io/curriculum_vitae/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faPlayCircle} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar