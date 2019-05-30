
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="rdwn-header">

    <Link to="/" className="rdwn-name">
      {/* {siteTitle} */}
      <h1>Busola Sanusi</h1>
      <small>
        Digital Product Designer
      </small>
    </Link>

    <ul className="rdwn-links">
      <li><Link to="/profile">Profile</Link></li>
      <li><a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
      <li><a href="https://github.com/rosanusi?tab=repositories" rel="noopener noreferrer" target="_blank">Github</a></li>
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
