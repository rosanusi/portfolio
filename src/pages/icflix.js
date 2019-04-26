import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const Icflix = (props) => (
  <Layout>
    <SEO title="icflix.com | Middle East Movie streaming platform" />
    

    <div className="rdwn-container-works">

        <Nav />

        <div className="rdwn-works-main">

            <div className="rdwn-works-content">
                <div className="brief">
                    <h3 className="title">icflix.com</h3>
                    <small className="subtitle">Middle East Movie streaming platform</small>
                    <p>Icflix is a Middle East based music streaming company offering Arabic, Bollywood and Hollywood content to the Middle East.</p>
                </div>

                <div className="resp">
                    <span className="date">2013 - 2016</span>
                    <p>Strategy, User Experience, User Interfaces, HTML/CSS</p>
                    <p>Across major platforms : Web, iOS, Android, TV, XBox, Playstation </p>
                </div>
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Winning in a new market</h6>
                <p>In order to gain the most market share in a relatively new market (Middle East) with fast growing competition, icflix must be available on all major devices in the region.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Designing the platform</h6>
                <p>I was responsible for the design of the product on different platforms - iOS, Desktop, Smart TV and XBox. I worked very closely with the teams from engineering, marketing and leadership to constantly brainstorm on ideas, prototype potential solutions for customer validation and overall continued improvement of the entire product.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Focus on discovery</h6>
                <p>We agreed it was important that customer experience is designed around discovery. In all of the platforms, the home screens focused on showing new content, popular contents and allowing partners to jump back into content they were watching before.</p>
            </div>


            
            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">A common product requirement</h6>
                <p>Creating a product across multiple platforms is very daunting endeavor and risk ending up disastrous if not managed properly. In order to mitigate this risk, I collaborated with the product team to create a common product requirement document which attempted to answer basic functionality questions of all the features of the product. This helped maintain feature parity across platforms and helped steer the product development in one direction.</p>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">payment challenges</h6>
                <p>In the middle east, different countries have different regulations regarding payment. As a result of this differences, we had to approach the customer experience regarding payment in a way that it's localized to the way customers from these countries currently make payment to digital products.</p>

                <p>We spoke to customers from these countries to understand their behavior and finally propose solutions that worked for each of these countries.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>



            <div className="workImage">
                <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <span className="small-title">and for the kids</span>
                <p>We wanted to give kids their own different app on tv. Partially because that allows us to separate adult content from kids but also more importantly because we found that kids discover and watch content a little different to adults.</p>
            </div>
             
        </div>

    </div>

  </Layout>
)

export default Icflix

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/icflix/newcover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/icflix/feature.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/icflix/more2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageFour: file(relativePath: { eq: "works/icflix/feature2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageFive: file(relativePath: { eq: "works/icflix/more1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageSix: file(relativePath: { eq: "works/icflix/more5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageSeven: file(relativePath: { eq: "works/icflix/more4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
            
        }
    }
`
