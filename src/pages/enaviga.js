import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Enaviga = (props) => (
  <Layout>
    <SEO title="Enaviga | A Boat rental platform based in Belgium" />
    
    <div className="rdwn-container-works">

        <Nav />

        <div className="rdwn-works-main">

            <div className="rdwn-works-content">
                <div className="brief">
                    <h3 className="title">Enaviga.com</h3>
                    <p>Enaviga.com helps people rent boat easily while also helping boat owners manage their boats more effectively and on-the-go.</p>
                </div>

                <div className="resp">
                    <span className="date">2016</span>
                    <p>User Experience, User Interfaces, HTML/CSS, React</p>
                    <p>Web, Android</p>
                </div>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">For boat rentals and owners</h6>
                <p>Enaviga.com aims to make renting boats delightful for the people. The goal of the project is to bring clarity and simplicity to the boat renting process and make it as easy as booking a luxurious apartment on airbnb.</p>
                <p>The platform also attempts to create a mobile platform for boat owners to manage their inventory effectively while on the move.</p>
            </div>



            <div className="workImage">
                <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Designing for Android</h6>
                <p>In the course of our research, we realized there's a huge representation of boat owners with mobile devices on Android OS.  We decided to make Android the first platform we designed for. We believed this will help in quick acquisition and also help us get feedback that we can continuously iterate on.</p>
            </div>



            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Talking to boat owners</h6>
                <p>Collaborated remotely with the team to work on designing the customer facing marketing platform, the partner platform; both web and android version.</p>
                <p>Having both co-founders who are boat owners make it easier to answer questions and put ideas forward. We spoke with some other boat owners to understand what the current ecosystem looks like and what they will expect to get from a platform like Enaviga.</p>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Component based approach</h6>
                <p>We also designed the web version of the product giving more partners who prefer to handle their operations using the web browser a platform to do so.</p>
                <p>The web version was built using React. To make collaboration between design and development smooth, I decided to take a component based approach in the design. This allows the development team to be able to reuse the component in various contexts and also bring design a step closer to the development process.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>



        </div>

    </div>

  </Layout>
)

export default Enaviga



export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/enaviga/main.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/enaviga/featured.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/enaviga/flows.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageFour: file(relativePath: { eq: "works/enaviga/more1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageFive: file(relativePath: { eq: "works/enaviga/pages.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
