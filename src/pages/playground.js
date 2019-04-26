import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'


// import HealthyApp from '../images/works/playground/healthyapp.jpg';
// import LocationManager from '../images/works/playground/locationmanager.jpg';
// import MusicPlayer from '../images/works/playground/musicplayer.jpg';

const Playground = () => (
    <Layout>
        <SEO title="Playground | random design explorations" />
    

        <div className="rdwn-container-playground">
            <Nav />

            <div className="rdwn-works-header">
                <h1 className="title">Playground</h1>
                <small>I sometimes randomly design UIs just to keep the creative juice flowing. Some of those times, there are actual ideas behind them.</small>
            </div>

{/* 
            <div className="rdwn-works-main">

                <div className="workImage">
                        <img src={HealthyApp} alt="" />
                </div>

                <div className="midway">
                    <span className="small-title">Insurance Form idea</span>
                    <p>I was trying to compare the insurance policies for my wife and I and realized how bad the compare website's form was. I thought to myself what if they made this so simple that you could even do it on the mobile. So I designed this to see how the flow works.</p>
                </div>
                


                <div className="workImage">
                    <img src={LocationManager} alt="" />
                </div>

                <div className="midway">
                    <span className="small-title">An idea for simple location manager</span>
                    <p>When I just relocated to Amsterdam, I did alot of biking and walking around. 
                        I would find very cool places and send the location to my wife via whatsapp with "Ignore" message so as to save the location. 
                        I thought the feature to manage location on google maps is very hidden and should make an app that does just that. </p>
                </div>
                    

                <div className="workImage">
                    <img src={MusicPlayer} alt="" />
                </div>

                <div className="midway">
                    <span className="small-title">An idea in shared listening Experience</span>
                    <p>Back in University, my friends and i would go hours just putting one another on new music, 
                        unknown artsits, not-so-popular music from not so popular artists. I thought it will really be cool to hear what 
                        people you follow online are listening to. Not like the "#np artist - song" but actually listen to what they are listening to.
                        Like a peer-2-peer radio station where you can tune in to anyone's stream if they allow you to listen.
                    </p>

                    <p>This obviously had a lot of legal issues written all over it, so I just designed some UI for the fun of it.</p>
                </div>

            </div> */}

            <ul className="rdwn-playground-grid">
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
                <li className="block">
                    this is a block
                </li>
            </ul>

        </div>

        
    </Layout>
)

export default Playground