import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Github from '../components/github'
// import Music from '../components/music'
import Books from '../components/books'
import Footer from '../components/footer'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="rdwn-grid-container">
    
      <Nav />

      <div className="rdwn-main-section">
        <Hero />
      </div>

      <div className="rdwn-sidebar">
        <Github />
        <Books />
        <Footer />  
      </div>  

      
    </div>

  </Layout>
)

export default IndexPage
