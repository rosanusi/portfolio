import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import LazyLoad from 'react-lazy-load';


import SwiffixMain from '../images/works/swiffix/main.jpg';
import LandingPage from '../images/works/swiffix/landingpage.jpg';
import Wireframes from '../images/works/swiffix/wireframes.jpg';
import More1 from '../images/works/swiffix/more1.jpg';
import More2 from '../images/works/swiffix/more2.jpg';
import More3 from '../images/works/swiffix/more3.jpg'; 


const Swiffix = () => (
  <Layout>
    <SEO title="Swiffix | Connecting People with verified professional handymen" />
    
    <Nav />

    <div className="rdwn-works-header">
        <h1 className="title">Swiffix</h1>
        <small>Connecting people with verified professional handymen</small>
    </div>
    <div className="workImage">
        <LazyLoad debounce={false}offsetVertical={500}>
                <img src={SwiffixMain} alt="" />
            </LazyLoad>
    </div>
    <div className="rdwn-works-overview">

        <div className="brief">
            <span className="small-title">Challenge</span>
            <p>A platform that attempted to simplify people’s lives by connecting them with 
verified professional handymen for help in the areas of plumbing, electricals, etc. As a very early stage startup, I worked on contract basis to 
help the founding team design the minimum viable product.</p>
        </div>

        <div className="resp">
            <span className="small-title">Responsibilities</span>
            <p>UX, UI Design</p>
            <p>Web, Mobile</p>
            <p>2015</p>
        </div>
    </div>

    <div className="rdwn-content">

        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={LandingPage} alt="" />
            </LazyLoad>
        </div>


        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={Wireframes} alt="" />
            </LazyLoad>
        </div>


        <div className="midway">
            <p>I designed the iOS based on provided wireframees provided by the team. The team wasn't sure how this product can work on the web. 
                So, I helped create wireframes to focus on the customer journey from marketing page to getting a handyman to come to their place.</p>
        </div>

        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={More1} alt="" />
            </LazyLoad>
        </div>



        <div className="midway">
        <p>I also built new features for their iOS app to help customers provide more details to the handyman about the 
        problem to be solved and help in creating a more accurate work estimate beofre accepting the job. I also worked 
        on the illustration i nthe marketing page of the product.</p>
        </div>

        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={More2} alt="" />
            </LazyLoad>
        </div>

        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={More3} alt="" />
            </LazyLoad>
        </div>
        
    </div>

  </Layout>
)

export default Swiffix