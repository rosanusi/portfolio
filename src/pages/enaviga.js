import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const Enaviga = (props) => (
  <Layout>
    <SEO title="icflix.com | Middle East Movie streaming platform" />
    

    <div className="rdwn-container-works">

        {/* <Nav /> */}

        <div className="rdwn-works-main">

            <div className="rdwn-work-copy">
                <div className="brief">
                    <h3 className="title">Enaviga boat management web app</h3>
                    <span className="date">2017</span>
                    <p>Enaviga.com helps people rent boats easily while also helping boat owners manage their boats more effectively and on-the-go.</p>
                    <p>I worked on designing the user experience of the boat management web app for their partners. This was a freelance project that had a very close deadline. We had to improvise on the process to be able to launch this to the market</p>
                </div>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Introduction</h6>
            
                <p>The two co-founders - both boat owners - realized there’s a space in the market for an app that combines boat management, boat maintenance and boat rental. In this way, you are able to handle check-in and check-out of boats while also managing and maintaining their boat.</p>

<p>In the early stage, there was a market research carried out. We gathered that one major issue people have with current apps have is that the process of adding your boat to the inventory is tedious.</p>

<p>One major thing the first version aims to solve is to make sure it connects the management features to the online check-in feature of the customer-facing boat rental mobile app.</p>
            </div>



            <div className="rdwn-work-copy">
                <h6 className="small-title">Information architecture</h6>
                <p>It made sense to map out the major categories, understand important information under each of them and how they seat among one another.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <p>I found figma to be great for some sort of card sorting exercises especially when your collaborators are remote. I did visual audit of different boat rental apps and documented the common categories found in their boat listing pages.  </p>
                <p>We used figma to collaborate on the information architecture. It helped us get alignment quite easily.</p>
            </div>        


            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>    


    

            <div className="rdwn-work-copy">
                <h6 className="small-title">The wireframes</h6>
                <p>To remove confusion on some of the features, I designed some more user flows. This helped us to organize our discussions and helped us progress quite faster.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>

            

            <div className="rdwn-work-copy">
                <h6 className="small-title">The visual design</h6>
                <p>We opted for a very syimple and clear visual design with help tips that help people progress in the forms quite easily without help.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <span className="small-title">User testing on usertesting.com</span>
                <p>One of the challenges of designing for early stage companies is that research is usually not prioritized. To get around this, I conducted a remote unmoderated user test using Invision prototype on userstesting.com.

Based on the insights from the user testing, we iterated further on the designs and the development team implemented the designs.</p>
            </div>
             
        </div>

    </div>

  </Layout>
)

export default Enaviga

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/enaviga/enaviga1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/enaviga/enaviga2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/enaviga/enaviga3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFour: file(relativePath: { eq: "works/enaviga/enaviga4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFive: file(relativePath: { eq: "works/enaviga/enaviga5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
