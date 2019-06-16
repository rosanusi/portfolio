import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import Header from '../components/header'
import Footer from '../components/footer'
import './../css/main.css'



const Layout = ({ children }) => (
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
      <div className="rdwn-wrap">
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

          <Header />

          {children}          

          <Footer />

      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
