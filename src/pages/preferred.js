import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import {useSpring, animated} from 'react-spring'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import mainVideo from '../video/pref.mp4'



const Preferred = (props) => {

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
            <SEO title="Ridwan Sanusi | Dashboard for booking.com's Preferred Partners" />
            
            <Header />


            <animated.div className="" style={workTitleBlock}>
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8 md:mt-48 mt-24 md:mb-24">
                    <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-7">
                        <small className="text-base md:text-2xl text-gray-600">Booking.com</small>
                        <h1 className="tracking-tight text-2xl md:text-4xl text-gray-900 md:my-4 my-2">
                        Program dashboard for Booking.com's exclusive partner program
                        </h1>
                        <span className="tracking-wide md:text-sm text-xs text-gray-600 ">2018</span>
                    </div>
                </div>
            </animated.div>




            <animated.div className="" style={workDetailsBlock}>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <p className="md:col-start-4 md:col-span-6 col-start-1 col-span-12 md:text-2xl text-xl text-gray-600">"Preferred Partner" is an exclusive status offered to high-performing properties.These properties get extra visibility in the search results and an exclusive badge. Because this was a partner-facing project, I have blurred the header to hide sensitive information, used mock data and discuss the external parts of the project.</p>
                    </div>
                </div>



                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Responsibility</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                            <p>I worked within an agile team of six. My role was to lead the design strategy with support from the Product owner and collaborate with various stakeholders to drive the project from understanding to go-to-market.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageFive.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Understanding the paint points</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p className="md:mb-12 mb-6">From our awareness survey reports, we understood that quite a large percentage of preferred partners were not aware of the value the program brings to their business.</p>
                        <p>In order to dig deeper into the root of this problem, we conducted an evaluative research to understand partners' current experience with the program.</p>
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>




                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Design Workshop</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p>Armed with our research insights, we organized a design workshop to explore various ideas on "How might we help partners understand the added value the program brings to their business". At the end of the workshop, We were able to converge on a proposed solution.</p>
                        </div>
                    </div>
                </div>




                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>


                
                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Ideation Phase</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">

                            <p className="md:mb-12 mb-6">In the next workshop, we dug deeper into what relevant data we believe will help our partners understand the programme better. Each participants pasted their post-its and explained the ideas to the rest of us. Afterwards, we did dot-voting on the post-its to help us converge on one proposed solution.</p>

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
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Initial sketches</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">

                        <p>At this stage, we believe we have sufficient concrete ideas to design. I started exploring ideas on paper and then turned those into wireframes. The aim was to create a quick first draft that can be tested in the partner lounge. This is a co-creation platform where we are able to ask select number of partners feedback on our ideas.</p>

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
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Partner understanding &amp; perception</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">

                        <p className="md:mb-12 mb-6">I created the first draft of the design and shared with the rest of the team and other stakeholders for feedback on the direction. I collaborated with both ux  writer and marketing manager on the content. Took the mockup to our design critique session for feedback from the rest of the ux community in preparation to test with the partners.</p>
                        <p>The goal of the research this time was to understand how partners perceive the proposed solution. We got valuable feedback that helped us further refine the design of the dashboard.</p>

                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                        <Img fluid={props.data.imageTen.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-3">
                        <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>




                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">The solution</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p>We refined the initial designs based on all the feedback we've got from our partners and also internally from the UX community. Also prototyped some of the interactions to help collaborating with the engineers easier.</p>

                        </div>
                    </div>
                </div>



                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <video src={mainVideo} type="video/mp4s" autoPlay loop controls/>
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                        <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
                        </div>
                        <div className="col-span-6">
                        <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                        <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>


                <div className="md:my-48 my-24">
                    <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                        <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Measuring Success</h6>
                        <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                        <p>With the pain points in our minds, we believe the best way to measure the value of the dashboard will be to monitor partner churn. We also believe the next awareness survey will show improved result if our solution worked. We continued to iterate on the dashboard based on feedback from partners, Introduced new changes and updates using our internal a/b testing platform.</p>

                        </div>
                    </div>
                </div>
            </animated.div>

            <Footer />
                 
      </Layout>
    )
}

export default Preferred

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/preferred/new-pref-01.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/preferred/new-pref-02.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/preferred/new-pref-03.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/preferred/new-pref-04.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/preferred/new-pref-05.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/preferred/new-pref-06.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeven: file(relativePath: { eq: "works/preferred/new-pref-07.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },

        imageEight: file(relativePath: { eq: "works/preferred/new-pref-08.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "works/preferred/new-pref-09.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTen: file(relativePath: { eq: "works/preferred/new-pref-10.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEleven: file(relativePath: { eq: "works/preferred/new-pref-11.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwelve: file(relativePath: { eq: "works/preferred/new-pref-12.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThirteen: file(relativePath: { eq: "works/preferred/new-pref-13.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFourteen: file(relativePath: { eq: "works/preferred/new-pref-14.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFifteen: file(relativePath: { eq: "works/preferred/new-pref-15.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSixteen: file(relativePath: { eq: "works/preferred/new-pref-16.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeventeen: file(relativePath: { eq: "works/preferred/new-pref-17.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`