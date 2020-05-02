import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {useSpring, animated} from 'react-spring'



const Swiffix = (props) => {

    
    const workTitleBlock = useSpring({ 
        from: { opacity: 0},
        delay: 600,
        opacity: 1,
        config: {duration : 500} 
    })

    const workDetailsBlock = useSpring({ 
        from: { opacity: 0},
        delay: 1000,
        opacity: 1,
        config: {duration : 500} 
    })

    return(

        <Layout>


        <SEO title="Ridwan Sanusi | Connecting People with verified professional handymen" />


        <Header />

        <animated.div className="" style={workTitleBlock}>
            <div className="container mx-auto grid grid-cols-12 gap-4 px-8 md:mt-48 mt-24 md:mb-24">
                <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-7">
                    <small className="text-base md:text-2xl text-gray-600">Swiffix</small>
                    <h1 className="tracking-tight text-2xl md:text-4xl text-gray-900 md:my-4 my-2">
                        Simplifying people’s lives by connecting them with verified on-demand professionals
                    </h1>
                    <span className="tracking-wide md:text-sm text-xs text-gray-600 ">2016 (Freelance)</span>
                </div>
            </div>
        </animated.div>

        <animated.div style={workDetailsBlock}>
            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <p className="md:col-start-4 md:col-span-6 col-start-1 col-span-12 md:text-2xl text-xl text-gray-600">In collaboration with a very small team of engineers and product manager, we spent the following two months to create the first version of the platform to validate the hypothesis at hand. My role was to design the first version of the iOS App. And based on that, lay the foundation of the web version.</p>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6">
                        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Understanding the problem</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p className="md:mb-12 mb-6">With so many handymen around but difficult to identify trustable professionals among them, Swiffix's ultimate aim was to validate the hypothesis that, creating a rating based community of handymen will make it easier for people to identify the best professionals around town.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">From data to insights to flows</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p className="">In order to create a product that people will use, it was crucial for us to know how people handled various needs in the house; like cleaning,  electrical and plumbing works, etc. We believe that knowing this and researching the problems associated with it can show us the opportunity gap which the proposed product can easily fill.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageFive.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Sketching the flows</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p className="">Since time is not a luxury that we have, I started very early on fleshing out ideas on paper then trasformed the user flows into sketches.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6">
                        <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Visual System</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p>At the beginning, there were explorations around adding delight to the experience with introduction of colors and copy that's perceived as fun. As we move along during the validation phase, we realized that a different approach where we bring the functionality of the product to the fore-front works better. </p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageEight.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageNine.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageTen.childImageSharp.fluid} />
                    </div>
                </div>
            </div>

        </animated.div>

        <Footer />



    </Layout>    
    )

}

export default Swiffix;

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/swiffix/new-swiffix-1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/swiffix/new-swiffix-2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/swiffix/new-swiffix-3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/swiffix/new-swiffix-4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/swiffix/new-swiffix-5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/swiffix/new-swiffix-6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeven: file(relativePath: { eq: "works/swiffix/new-swiffix-7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEight: file(relativePath: { eq: "works/swiffix/new-swiffix-8.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "works/swiffix/new-swiffix-9.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTen: file(relativePath: { eq: "works/swiffix/new-swiffix-10.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`