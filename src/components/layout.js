import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Anime, {anime} from 'react-anime';

import './../css/main.css'

let mainPageProps = {
  translateY : [-4, 0],
  scale: [.99, 1],
  opacity : [0, 1],
  delay: [anime.stagger(400)]
}



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

      <Anime {...mainPageProps}>
      <div className="rdwn-wrap">
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}


          <Header />
            {children}          
          <Footer />
      </div>
      </Anime>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
