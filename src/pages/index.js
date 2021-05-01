import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
// import Header from '../components/header'
import Footer from '../components/footer'
import Works from '../components/works'
import {useSpring, animated} from 'react-spring'



const IndexPage = () => {

  const fadeThird = useSpring({ 
    from: { opacity: 0},
    delay: 1000,
    opacity: 1,
    config: {duration : 500} 
  })

  return (
    <Layout>
      <SEO title="Ridwan Sanusi | Portfolio" keywords={[`gatsby`, `application`, `react`]} />
        {/* <Header /> */}
        <Hero />
        {/* <animated.div style={fadeThird}>
          <Works />
        </animated.div> */}
        <Footer />
    </Layout>

  )

}

export default IndexPage


