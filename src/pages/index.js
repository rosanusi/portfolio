import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Currently from '../components/currently'
import Works from '../components/works'
import Playground from '../components/playground'
import Github from '../components/github'
import Music from '../components/music'
import Books from '../components/books'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />

    <Nav className='rdwn-header_floated'/>

    <Currently />

    <Works />

    {/* <Playground /> */}

    <Github />


    <Books />

    <Music />

    <Nav className='rdwn-footer_floated' />





    {/* <Link to="/page-2/">Go to page 2</Link> */}


  </Layout>
)

export default IndexPage
