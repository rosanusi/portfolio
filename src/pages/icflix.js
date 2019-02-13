import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

import icflixMain from '../images/works/icflix/main.jpg';
import icflixFeature from '../images/works/icflix/feature.jpg';
import More1 from '../images/works/icflix/more1.jpg';
import More2 from '../images/works/icflix/more2.jpg';
import More3 from '../images/works/icflix/more3.jpg';
import More4 from '../images/works/icflix/more4.jpg';
import More5 from '../images/works/icflix/more5.jpg';
import More6 from '../images/works/icflix/more6.jpg';
import Tv from '../images/works/icflix/tv.jpg';


const Icflix = () => (
  <Layout>
    <SEO title="icflix.com | Middle East Movie streaming platform" />
    
    <Nav />

    <div className="rdwn-works-header">
        <h1 className="title">icflix.com</h1>
        <small>Middle East Movie streaming platform</small>
    </div>
    <div className="workImage">
        <img src={icflixMain} alt="" />
    </div>
    <div className="rdwn-works-overview">

        <div className="brief">
            <span className="small-title">Challenge</span>
            <p>During my 3 year stint at icflix, I helped design the user experience across
            various parts of the product and different platforms. The challenge was very clear - In order to gain the most market share in a new market (Middle East) with growing competition, icflix app must be available on all major platforms. This was the strongest market differentiator.</p>
        </div>

        <div className="resp">
            <span className="small-title">Responsibilities</span>
            <p>Strategy, UX, UI Design, HTML/CSS</p>
            <p>Web, iOS, Android, TV, XBox, Playstation </p>
            <p>Between 2013-2016</p>
        </div>
    </div>

    <div className="rdwn-content">

        <div className="workImage">
            <img src={icflixFeature} alt="" />
        </div>

        <div className="workImage">
            <img src={Tv} alt="" />
        </div>

        <div className="midway">
            <p>With clear problem statement defined, I worked very closely with team of engineers to come up with designs and continually support them in designing around whatever constraints they may face techincally.</p>
            <p>Besides working on the customer journey of the main app, I also worked side by side with the marketing team and the leadeship team to design the first version of the marketing page.</p>
        </div>


        <div className="workImage">
            <img src={More1} alt="" />
        </div>


        <div className="midway">
            <p>Creating a products across multiple channels simultaneous is very daunting and risk ending up 
                disastrous if not managed properly.</p>
                
            <p>In order to mitigate this risk, I created a common product 
                requirement document which attempted to answer basic functionality questions of all the features 
                of the product designed. This helped maintain feature parity across platforms and helped steer the 
                product development with one accord.</p>
        </div>

        <div className="workImage">
            <img src={More2} alt="" />
        </div>



        <div className="midway">
            <span className="small-title">Challenges in account creation and payment system</span>
            <p>Throughout the middle east, different countries have different regulations regarding payment.
                As a result of this differernces, we had make our payment system flexible enough to allow even customers from 
                the lowest denominator country pay for the service easily. We spoke to customers from some othe more difficult 
                countries to understand their behaviour when it comes to payment and created solutions to try.</p>

            <p>After the research, I created the account creation task flow with focus on making sure most of the customers were able to make payment easily without friction.
            </p>
        </div>

        <div className="workImage">
            <img src={More3} alt="" />
        </div>

        <div className="workImage">
            <img src={More6} alt="" />
        </div>


        <div className="midway">
            <span className="small-title">icflixkids</span>
            <p>Also worth mentioning is the icflixkids app designed to focus on the little ones in the house. 
                As we continued to grow, we found it necessary to create a dedicated platform for kid. 
                I had the opportunity to create a different kind of UI different from what I'm used to.</p>
        </div>

        <div className="workImage">
            <img src={More4} alt="" /> 
        </div>

        
    </div>

  </Layout>
)

export default Icflix