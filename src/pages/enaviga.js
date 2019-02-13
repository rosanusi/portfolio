import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

import EnavigaMain from '../images/works/enaviga/main.jpg';
import Featured from '../images/works/enaviga/featured.jpg';
import Flows from '../images/works/enaviga/flows.jpg';
import Pages from '../images/works/enaviga/pages.jpg';
import More1 from '../images/works/enaviga/more1.jpg';


const Enaviga = () => (
  <Layout>
    <SEO title="Enaviga | A Boat rental platform based in Belgium" />
    
    <Nav />

    <div className="rdwn-works-header">
        <h1 className="title">Enaviga</h1>
        <small>A Boat Rental Platform based in Belgium</small>
    </div>
    <div className="workImage">
        <img src={Featured} alt="" />
    </div>
    <div className="rdwn-works-overview">

        <div className="brief">
            <span className="small-title">Challenge</span>
            <p>Enaviga.com helps people to rent boat as easily as possible.
Project covers welcome page, boat rental process &amp; partner facing 
app to facilitate adding boat for rent online easily.</p>
        </div>

        <div className="resp">
            <span className="small-title">Responsibilities</span>
            <p>UX, UI Design</p>
            <p>Web &amp; Mobile platforms</p>
            <p>2016</p>
        </div>
    </div>

    <div className="rdwn-content">

        <div className="workImage">
            <img src={Pages} alt="" />
        </div>


        <div className="midway">
            <p>Created the flows for various features of the partner web app to help them manage their inventory online easily. It was important to create this to facilitate collaboration with the 
                engineering team and make sure the stakeholders are well aligned with my thoughts.</p>

            <p>Once approved by the stakehodlers, I designed the whole app and delivered the html/css to the engineering team for implementation.</p>

        </div>

        <div className="workImage">
            <img src={Flows} alt="" />
        </div>

        <div className="workImage">
            <img src={More1} alt="" />
        </div>
        
    </div>

  </Layout>
)

export default Enaviga