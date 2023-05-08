import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="center">
    <div className="first">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul className="second">
      <li>
        <Link className="li" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="li" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="li" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
