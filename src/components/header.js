
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
// import Anime, {anime} from 'react-anime';


// let headerProps = {
//   opacity : [0, 1],
//   translateY : [-4, 0],
//   easing: 'easeInOutQuad',
//   // loop: true,
//   duration: 600,
// }


const Header = ({ siteTitle }) => (



  
  <header className="rdwn-header">
    
    {/* <Anime {...headerProps}> */}

    <Link to="/" className="rdwn-name">
      {/* {siteTitle} */}
      <h1>Ridwan Sanusi</h1>
      <span className="title">Experience Designer</span>
    </Link>

    {/* <ul className="rdwn-links">
      <li><Link to="/profile">About</Link></li>
      <li><a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Resume</a></li>
    </ul> */}


    {/* </Anime> */}

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
