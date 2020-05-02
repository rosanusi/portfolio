import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import {useSpring, animated} from 'react-spring'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import mainVideo from '../video/icflixsmart.mp4'
// import videoProto1 from '../video/icflix-horizontal.mp4'

const Icflix = (props) => {

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

        <SEO title="Ridwan Sanusi | Redesign of icflix Smart TV app" />

        <Header />
        

        <animated.div className="" style={workTitleBlock}>
            <div className="container mx-auto grid grid-cols-12 gap-4 px-8 md:mt-48 mt-24 md:mb-24">
                <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-7">
                    <small className="text-base md:text-2xl text-gray-600">icflix</small>
                    <h1 className="tracking-tight text-2xl md:text-4xl text-gray-900 md:my-4 my-2">
                    Redesigning Middle East's first movie streaming app
                    </h1>
                    <span className="tracking-wide md:text-sm text-xs text-gray-600 ">2016</span>
                </div>
            </div>
        </animated.div>






        <animated.div className="" style={workDetailsBlock}>


            <div className="md:my-24 my-12 py-24 bg-black">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-24 my-12">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <p className="md:col-start-4 md:col-span-6 col-start-1 col-span-12 md:text-2xl text-xl text-gray-600">After a year of successful launch of the streaming app on various platforms, We set out to redesign the product to solve some important customer problems.</p>
                    <p className="md:col-start-4 md:col-span-6 col-start-1 col-span-12 md:text-2xl text-xl text-gray-600">
                        I worked within a small multidisciplinary team. Collaborated very closely with the product manager and the leadership team in definining the strategy and scope of the redesign and delivered all design artifacts.
                    </p>
                </div>
            </div>


            <div className="md:my-24 my-12">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Kick-off with insights gathering</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p className="md:mb-12 mb-6">We started out by carrying out interviews with some of our customers to understand major paint points they were having while interacting with our product.</p>
                    <p>To make sense of the data we had gathered, we opted for an open sorting system. After individual sorting exercise, I facilitated a response analysis session to find the recurring themes in all that we’ve gathered so far.
                    </p>
                    </div>
                </div>
            </div>



            <div className="md:my-24 my-12">
                <div className="container mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6">
                    <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                    </div>
                </div>
            </div>





            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Rethinking the funnel</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>Created user flows for all the major touchpoints that a customer takes while engaging with our product. This made it easier for us to see the navigational structure of our product and zoom in on where we are able to bring delight to our customers</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                    <Img fluid={props.data.imageFive.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Giving form to the ideas</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>We decided to start from the most complex platform for us - The TV. As such, it was important to explore various ideas with pen and paper, do quick check-ins with the rest ofthe team before transforming the bestideas into wireframes.</p>
                    </div>
                </div>
            </div>



            <div className="md:my-24 my-12">
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
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Wireframes</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>We wanted to make sure that our visual considerations amongst other things make sense. We created wireframes to visualize the major flows we had created. This helped us, not just in rethinking our approach and some design decisions, it helped us collaborate even better with the leadership team as this gives the first opportunity to interact with the possible future of the current product.</p>
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
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">High fidelity explorations</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>As expected, we had a lot of back and forth with some design decisions either because of usability concerns or just investigating how certain interaction decisions work in the various platforms we will be designing for. During this period, different design explorations were created and various critic sessions were organized.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24 bg-black">
                <div className="mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageTen.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Design decisions</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>After both internal and external feedback sessions, we finally settled for a look and feel that works agnostically on different platforms.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24 bg-black">
                <div className="mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Img fluid={props.data.imageNine.childImageSharp.fluid} />
                    </div>
                </div>
            </div>

            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Adaptable design properties</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>It's important to us that our product share the same elements, componentes and even interaction. After successful testing and launching of our redesigned TV app on samsung TVs, we embarked on the redesign of the iOS app to follow suit.</p>
                    </div>
                </div>
            </div>

            <div className="md:my-48 my-24">
                <div className="mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                    <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
                    </div>
                </div>
            </div>



            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Kids control their own app</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p>One of the major pain points we set out to solve was separating kids content from adults. Because of our geographical context, this was especially important. We decided that it made sense to take the kids content entirely out of the main app and created a different app for them.</p>
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                    <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
                    </div>
                </div>
            </div>


            <div className="md:my-48 my-24">
                <div className="container mx-auto grid grid-cols-12 gap-4 px-8">
                    <h6 className="md:col-start-2 md:col-span-3 col-span-12 tracking-tight md:text-4xl text-2xl text-gray-900">Takeaways</h6>
                    <div className="md:col-start-6 md:col-span-6 col-span-12 md:text-2xl text-base text-gray-900">
                    <p className="md:mb-12 mb-6">The new version we designed solved lot of issues from the first version. Left the company during the implementation phase of this project. So, I wasn’t there to see it roll out to the market. There were various lessons learned during the design that has formed some of the core beliefs I have about design today. We changed our direction like three times during the design process. From the result of it, it was all great decisions to do that. </p>
                    </div>
                </div>
            </div>
        </animated.div>

        <Footer />
    </Layout>
    )

}

export default Icflix

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/icflix/new-icflix-1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/icflix/new-icflix-2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/icflix/new-icflix-3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/icflix/new-icflix-4.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/icflix/new-icflix-5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/icflix/new-icflix-6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeven: file(relativePath: { eq: "works/icflix/new-icflix-7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEight: file(relativePath: { eq: "works/icflix/new-icflix-8.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "works/icflix/new-icflix-9.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTen: file(relativePath: { eq: "works/icflix/new-icflix-10.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEleven: file(relativePath: { eq: "works/icflix/new-icflix-11.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwelve: file(relativePath: { eq: "works/icflix/new-icflix-12.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThirteen: file(relativePath: { eq: "works/icflix/new-icflix-13.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFourteen: file(relativePath: { eq: "works/icflix/new-icflix-14.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFifteen: file(relativePath: { eq: "works/icflix/new-icflix-15.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSixteen: file(relativePath: { eq: "works/icflix/new-icflix-16.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeventeen: file(relativePath: { eq: "works/icflix/new-icflix-17.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`