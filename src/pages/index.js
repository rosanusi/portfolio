import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Nav from '../components/nav'
// import Currently from '../components/currently'
import Works from '../components/works'
import Github from '../components/github'
import Music from '../components/music'
import Books from '../components/books'
import Footer from '../components/footer'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Nav />

    <Hero />

    {/* <Currently /> */}

    <Works />

    {/* <Playground /> */}

    <Github />


    <div className="rdwn-audiobook">
      <Books />
      <Music />
    </div>






    {/* <Link to="/page-2/">Go to page 2</Link> */}

    <Footer />

  </Layout>
)

export default IndexPage
