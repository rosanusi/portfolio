import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Img from 'gatsby-image'
import SEO from '../components/seo'
// import Books from '../components/books'
// import Myself from '../video/meee.mp4'
import {useSpring, animated} from 'react-spring'



const Profile = (props) => {

    const fadeBioCopy = useSpring({ 
        from: { opacity: 0},
        delay: 600,
        opacity: 1,
        config: {duration : 500} 
    })


    const fadeBioImg = useSpring({ 
        from: { opacity: 0},
        delay: 1000,
        opacity: 1,
        config: {duration : 500} 
    })

    const fadeBioBodyCopy = useSpring({ 
        from: { opacity: 0},
        delay: 1400,
        opacity: 1,
        config: {duration : 500} 
    })


    const fadeBioSidebar = useSpring({ 
        from: { opacity: 0},
        delay: 1800,
        opacity: 1,
        config: {duration : 500} 
    })


    return (
        <Layout>
            <SEO title="Ridwan Sanusi | About me" />

            <Header />
            
            <div className="container mx-auto px-8">

                <animated.div className="grid grid-cols-12 gap-4 md:mt-48 md:mb-24 mt-24 mb-12" style={fadeBioCopy}>
                    <p className="col-start-1 col-span-12 md:col-start-4 md:col-span-8 tracking-tight text-2xl md:text-4xl">
                        Embracing challenges. Designing the right thing. Designing it the right way. Enjoying the process.
                    </p>
                </animated.div>  


                <animated.div className="grid grid-cols-12 gap-4" style={fadeBioImg}>
                    <div className="md:col-span-8 col-span-12">
                        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </div>
                </animated.div>

                <animated.div className="grid grid-cols-12 gap-4">

                    <div className="md:col-start-2 md:col-span-6 col-span-12 md:mt-24 mt-12"  style={fadeBioBodyCopy}>
                        <p className="text-xl md:text-2xl text-gray-900 mb-4 md:mb-8">As a product designer, the core of my work involves helping my team understand complex challenges through research, explore ideas based on actionable insights and craft data-informed designs that solve customer problems while adding value to business.</p>
                        <p className="textbase md:text-xl text-gray-900 mb-4 md:mb-8">Because of the pivotal role of design in bringing user-centricity to product development, I often serve as the glue that brings various roles together to rally around the challenge at hand from the understanding phase to launching the product. Hence, collaboration, team-work, facilitation and writing are the important layers above my core skills that help me do my job.</p>
                        <p className="textbase md:text-xl text-gray-900 mb-4 md:mb-8">Born and raised in Nigeria. In the past ten years, I have lived in Southeast Asia, Middle East and currently Europe. Travel and experiencing new cultures have always played a big role in shaping my personal beliefs.</p>
                        <p className="textbase md:text-xl text-gray-900 mb-4 md:mb-8">When I'm not knee-deep in some design work, I try to spend some time improving my javascript through various side projects, penning down <a href="https://sidenote.ridwansanusi.com/"  rel="noopener noreferrer" target="_blank">some notes on design</a> &amp; whatnots or you can find me fiddling with my Maschine MK2 sampling old records to make beats.</p>
                    </div>


                    <animated.div className="md:col-start-10 md:col-span-3 col-start-1 col-span-12 md:-mt-48"  style={fadeBioSidebar}>

                        <div className="my-4">
                            <small className="text-md md:text-base text-gray-600">Currently (2016 - Now)</small>
                            <h4 className="text-base md:text-xl text-gray-900">UX Designer @ booking.com, Amsterdam</h4>
                        </div>


                        <div className="my-4">
                            <small className="text-md md:text-base text-gray-600">Previously (2013 - 2016)</small>
                            <h4 className="text-base md:text-xl text-gray-900">UX Designer @ icflix.com, Dubai</h4>
                        </div>

                        <div className="my-4">
                            <small className="text-md md:text-base text-gray-600">Earlier (2011 - 2013)</small>
                            <h4 className="text-base md:text-xl text-gray-900">Senior Web Designer @ Go-Gulf.com, Dubai</h4>
                        </div>

                        <div className="my-4">
                            <small className="text-md md:text-base text-gray-600">Current Side Projects</small>

                            <p className="text-base md:text-xl text-gray-900"><a href="https://sidenote.ridwansanusi.com/"  rel="noopener noreferrer" target="_blank">Design Sidenotes</a>, <a href="https://github.com/rosanusi/project_journal">Project Journal</a>, <a href="https://quran-curious-mind.netlify.com/">Quran for the curious minds</a>, <a href="https://github.com/rosanusi/notes">Notes App</a>, <a href="https://github.com/rosanusi/watchbox">Watchbox</a></p>
                        </div>

                    </animated.div>

                </animated.div>
            
            </div>

            <Footer />

        </Layout>
    )  

}

export default Profile;


export const pageQuery = graphql`
    query {

        imageTwo: file(relativePath: { eq: "personal/personal-01.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
                }
            }
        },

    }
`