import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import LazyLoad from 'react-lazy-load';


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
            <LazyLoad debounce={false}offsetVertical={500}>
                <img src={HealthyApp} alt="" />
            </LazyLoad>
        </div>

        <div className="midway">
            <span className="small-title">Insurance Form idea</span>
            <p>I was tryign to compare the insurance policies for my wife and I and realzied how bad the compare website's form was. I thought to myself what if they made this so simple that you can even do it on the mobile. So I designed this to see how the flow is.</p>
        </div>
        


        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
            <img src={LocationManager} alt="" />
        </LazyLoad>
        </div>

        <div className="midway">
            <span className="small-title">An idea for simple location manager</span>
            <p>When I just relocated to Amsterdam, I did alot of biking and walking around. 
                I would find very cool places and send the location to my wife via whatsapp with "Ignore". 
                I thought the feature to manage on google maps is very hidden and should make an app that focuses on that. </p>
        </div>
        

        <div className="workImage">
            <LazyLoad debounce={false}offsetVertical={500}>
            <img src={MusicPlayer} alt="" />
        </LazyLoad>
        </div>

        <div className="midway">
            <span className="small-title">An idea in shared listening Experience</span>
            <p>Back in University, my friends and i would go hours jsut putting one another on new music, 
                unknown artsits, unrelease music from not so popular artists. I thought it will really be cool to hear what 
                people you follow online are listening to. Not like the "#np artist - song" but actually listen to what they are listening to.
                Like a peer-2-peer radio station where you can tune in to anyone's stream if they allow you to listen.
            </p>

            <p>This obviously had a lot of legal issues written over it, so I just designed some UI for fun of it.</p>

        </div>

    </div>

  </Layout>
)

export default Playground