import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Swiffix = (props) => (
  <Layout>
    <SEO title="Swiffix | Connecting People with verified professional handymen" />
    

    <div className="rdwn-container-works">

        <Nav />

        <div className="rdwn-works-main">

            <div className="rdwn-works-content">

                <div className="brief">
                    <h3 className="title">Swiffix.com</h3>
                    <small className="subtitle">Connecting people with verified professional handymen</small>
                    <p>Swiffix wants to simplify people’s lives by connecting them with verified professionals to help them with tasks in the areas of plumbing, electrical, etc.</p>
                </div>

                <div className="resp">
                    <span className="date">2015</span>
                    <p>User Experience, User Interfaces</p>
                    <p>Web, iOS</p>
                </div>
                
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />

            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Creating a trustable community</h6>
                <p>With so many handymen around but difficult to identify trustable professionals among them. Swiffix's aim was to validate the hypothesis that, creating a rating based community of handymen will make it easier for people to identify the best professionals around town.</p>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Designing the MVP</h6>
                <p>In collaboration with a very small team - The founder, An engineer and a Marketing manager, we spent the following two months to create the MVP of the platform to validate the hypothesis at hand. My role was to design the first version of the iOS App. And based on that, lay the foundation of the web version.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="small-title">Iterating based on validation</h6>
                <p>At the beginning, there were explorations around adding delight to the experience with introduction of colors and copy that's perceived as fun. As we move along during the validation phase, we did realized that a different approach where we bring the functionality of the product to the front works better. </p>

                <p>As we enter development phase of the iOS project, we started thinking about creating a web version of the product. Created the customer journey mirroring the experience present on the mobile version with the affordances that desktop allows.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>
                


        </div>

    </div>


  </Layout>
)

export default Swiffix;

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/swiffix/main.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/swiffix/wireframes.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/swiffix/landingpage.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageFour: file(relativePath: { eq: "works/swiffix/more2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`