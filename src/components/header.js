
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="rdwn-header">

    <Link to="/" className="rdwn-name">
      {/* {siteTitle} */}
      <h1>Ridwan Sanusi <span class="title">↬ Product Designer</span></h1>
    </Link>

    <ul className="rdwn-links">
      <li><Link to="/profile">About</Link></li>
      <li><a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Resume</a></li>
    </ul>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
