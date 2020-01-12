import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Swiffix = (props) => (
  <Layout>
    <SEO title="Busola Sanusi | Connecting People with verified professional handymen" />
    


    {/* <Nav /> */}

    <div className="rdwn-works-main">


        <div className="rdwn-work-head">
            <p className="rdwn-bio_copy__main">Designing an on-demand home service platform for Swiffix</p>
        </div>

        <div className="rdwn-work-copy">
            <div className="details">
                <small className="smalltitle">Strategy, Research, UX, UI, Prototype</small>
                <p className="sub">Swiffix wants to simplify people’s lives by connecting them with verified on-demand professionals to help with taks around their home.</p>
            </div>
        </div>

    
        <div className="workImage">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>




        <div className="rdwn-work-copy">
            <h6 className="title">Creating a trustable community</h6>

            <div className="details">
                <p>With so many handymen around but difficult to identify trustable professionals among them. Swiffix's ultimate aim was to validate the hypothesis that, creating a rating based community of handymen will make it easier for people to identify the best professionals around town.</p>
                <p>To be able to do this, it was crucial to design the initial version with focus on connecting people with trusted professionals in various home services.</p>
            </div>
        </div>


        <div className="rdwn-work-copy">
            <h6 className="title">Designing the MVP</h6>

            <div className="details">
                <p>In collaboration with a very small team - The founder, An engineer and a Marketing manager, we spent the following two months to create the MVP of the platform to validate the hypothesis at hand. My role was to design the first version of the iOS App. And based on that, lay the foundation of the web version.</p>
            </div>
        </div>



        <div className="workImage">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>




        <div className="rdwn-work-copy">
            <h6 className="title">User research</h6>

            <div className="details">
                <p>In order to create a product that people will use, it was crucial for us to know how people handled various needs in the house; like cleaning,  electrical and plumbing works, etc. We belive that knowing this and researching the problems associated with it can show us the opportunity gap which the proposed product can easily fill.</p>
            </div>
        </div>



        <div className="rdwn-work-copy">
            <h6 className="title">Initial sketches</h6>

            <div className="details">
                <p>Since time is not a luxury that we have, I started very early on fleshing out ideas on paper then trasformed them into high fidelity wire-flows.</p>
            </div>
        </div>



        <div className="workImage">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>


{/* 
        <div className="rdwn-work-copy">
            <h6 className="title">High fidelity task flows</h6>

            <div className="details">
                <p>In collaboration with a very small team - The founder, An engineer and a Marketing manager, we spent the following two months to create the MVP of the platform to validate the hypothesis at hand. My role was to design the first version of the iOS App. And based on that, lay the foundation of the web version.</p>
            </div>
        </div> */}



        <div className="workImage">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>



        <div className="rdwn-work-copy">
            <h6 className="title">User Interface</h6>

            <div className="details">
                <p>At the beginning, there were explorations around adding delight to the experience with introduction of colors and copy that's perceived as fun. As we move along during the validation phase, we realized that a different approach where we bring the functionality of the product to the fore-front works better. </p>
            </div>
        </div> 

        <div className="workImage">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>


        <div className="rdwn-work-copy">
            <h6 className="title">Iterating based on validation</h6>

            <div className="details">
                <p>IAt the beginning, there were explorations around adding delight to the experience with introduction of colors and copy that's perceived as fun. As we move along during the validation phase, we did realized that a different approach where we bring the functionality of the product to the front works better. </p>
                <p>As we enter development phase of the iOS project, we started thinking about creating a web version of the product. Created the customer journey mirroring the experience present on the mobile version with the affordances that desktop allows.</p>
            </div>
        </div> 

        <div className="workImage">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        </div>
            


    </div>



  </Layout>
)

export default Swiffix;

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/swiffix/swiffix-sketch01.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/swiffix/swiffix-research02.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/swiffix/swiffix-wireframe03.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/swiffix/swiffix-uicomp04.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/swiffix/swiffix-design05.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/swiffix/swiffix-main.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`