import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import './../css/main.css'

const Layout = ({ children }) => {

  return(

    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <div className="w-screen text-gray-900">
        {children}          
      </div>
    )}
  />

  )

}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
