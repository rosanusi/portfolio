import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

import HealthyApp from '../images/works/playground/healthyapp.jpg';
import LocationManager from '../images/works/playground/locationmanager.jpg';
import MusicPlayer from '../images/works/playground/musicplayer.jpg';

const Playground = () => (
  <Layout>
    <SEO title="Playground | random design explorations" />
    
    <Nav />

    <div className="rdwn-works-header">
        <h1 className="title">Playground</h1>
        <small>I sometimes randomly design UIs just to keep the creative juice flowing. Sometimes, there are ideas behind them.</small>
    </div>

    <div className="rdwn-content">

        <div className="workImage">
            <img src={HealthyApp} alt="" />
        </div>

        <div className="midway">
            <span className="small-title">Insurance Form idea</span>
            <p>Created the flows for various features of the partner web app to help them manage their inventory online easily. It was important to create this to facilitate collaboration with the engineering team and make sure the stakeholders are well aligned with my thoughts.</p>
        </div>
        


        <div className="workImage">
            <img src={LocationManager} alt="" />
        </div>

        <div className="midway">
            <span className="small-title">An idea for simple location manager</span>
            <p>Created the flows for various features of the partner web app to help them manage their inventory online easily. It was important to create this to facilitate collaboration with the engineering team and make sure the stakeholders are well aligned with my thoughts.</p>
        </div>
        

        <div className="workImage">
            <img src={MusicPlayer} alt="" />
        </div>

        <div className="midway">
            <span className="small-title">An idea in shared listening Experience</span>
            <p>Created the flows for various features of the partner web app to help them manage their inventory online easily. It was important to create this to facilitate collaboration with the engineering team and make sure the stakeholders are well aligned with my thoughts.</p>
        </div>

    </div>

  </Layout>
)

export default Playground