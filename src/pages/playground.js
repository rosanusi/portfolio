import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import {useSpring, animated} from 'react-spring'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import parHomes from '../images/play/parHomes.mp4'
import attendee from '../images/play/attendeeInteractions.gif'
import deleteUndo from '../images/play/delete_undo_interaction.gif'
import motionStudy from '../images/play/motion-study.gif'



const Playground = (props) => {

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

    return (
        <Layout>

            <SEO title="Ridwan Sanusi | Dashboard for booking.com's Preferred Partners" />
            
            <Header />


            <animated.div className="" style={workTitleBlock}>
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8 md:mt-48 mt-24 md:mb-24">
                    <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-7">
                        <small className="text-base md:text-2xl text-gray-600">Playground</small>
                        <h1 className="tracking-tight text-2xl md:text-4xl text-gray-900 md:my-4 my-2">
                            General design explorations ranging from tangible ideas to pure creative simulations
                        </h1>
                    </div>
                </div>
            </animated.div>




            <animated.div className="my-12 md:my-24" style={workDetailsBlock}>

                <div className="masonry-with-columns container mx-auto px-8 grid grid-cols-12 gap-6 md:gap-12">
                    <div className="col-span-12 md:col-span-6">
                        <img src={attendee} alt="" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <img src={deleteUndo} alt="" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <video src={parHomes} type="video/mp4s" autoPlay loop controls/>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Img fluid={props.data.imageNine.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Img fluid={props.data.imageEight.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <Img fluid={props.data.imageTen.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <img src={motionStudy} alt="" />
                    </div>
                </div>

            </animated.div>

            <Footer />

        </Layout>

    )
}

export default Playground


export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "play/attendeeInteractions.gif" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "play/buddyapp.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "play/buddyapp2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "play/canvastyle.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "play/onstickly-Reg.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "play/onstickly-secondary.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeven: file(relativePath: { eq: "play/onsticklyApp.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEight: file(relativePath: { eq: "play/par.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "play/ticklyweb.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTen: file(relativePath: { eq: "play/icons1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`