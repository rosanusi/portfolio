import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import {useSpring, animated} from 'react-spring'

const Header = ({ siteTitle }) => {

  const fadeHeader = useSpring({ 
    from: { opacity: 0},
    delay: 200,
    opacity: 1,
    config: {duration : 500} 
  })

  return(
    <animated.header className="mt-10 md:mt-20" style={fadeHeader}>
      <div className="flex container mx-auto px-8">
        {/* <Anime {...headerProps}> */}

        <Link to="/" className="rdwn-name text-gray-900">
          <h1 className="text-base md:text-2xl">Ridwan Sanusi</h1>
          <small className="text-base md:text-2xl text-gray-600">Product &amp; Experience Designer</small>
        </Link>

      </div>
    </animated.header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
