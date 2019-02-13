import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="rdwn-header">
      <h1 className="rdwn-name">
        <Link
          to="/"
        >
          {/* {siteTitle} */}

          'Busola Sanusi
        </Link>
      </h1>

      <ul className="rdwn-links">
        <li>something</li>
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
