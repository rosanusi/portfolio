import React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Books from '../components/books'


const Profile = (props) => (
    <Layout>
        <SEO title="Ridwan Sanusi | Profile" />

        <div className="rdwn-grid-container profile">

            {/* <h1 className="rdwn-bio_copy__name">My Profile</h1> */}

            <p className="rdwn-bio_copy__main">Embracing challenges. Designing the right thing. Designing it the right way. Enjoying the process.</p>

        </div>  

        <div className="rdwn-profile-container">


            <div className="rdwn-main-section">

                <div className="rdwn-profile-copy">
                    <small className="smalltitle">What I do</small>
                    <p>As an experience designer, the core of my work involves helping my team understand complex challenges through research, explore ideas based on actionable insights and craft data-informed designs that solve customer problems while adding value to business.</p>

                    <small className="smalltitle">Role &amp; responsibilities</small>
                    <p>Because of the pivotal role of design in bringing user-centricity to product development, I often serve as the glue that brings various roles together to rally around the challenge at hand from the understanding phase to launching the product. Hence, collaboration, team-work, facilitation and writing are the important layers above my core skills that help me do my job.</p>

                </div>    

                <div className="workImage">
                    <div className="img-container">
                        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                    </div>
                </div>

                <div className="rdwn-profile-copy">
                <small className="smalltitle">Brief Bio</small>
                    <p>Born and raised in Nigeria. In the past ten years, I have lived in Southeast Asia, Middle East and currently Europe. Travel and experiencing new cultures have always played a big role in shaping my personal beliefs.</p>

                    <small className="smalltitle">Other Activities</small>
                    <p>When I'm not knee-deep in some design work, I try to spend some time improving my javascript through various side projects, penning down <a href="https://ridsnote.blot.im/"  rel="noopener noreferrer" target="_blank">some notes on design</a> &amp; whatnots or you can find me fiddling with my Maschine MK2 sampling old records to make beats.</p>

                </div>  
                
            </div>

            <div className="rdwn-profile-sidebar">
                <small className="smalltitle">Currently (2016 - Now)</small>
                <h4 className="xp-title">UX Designer at booking.com, Amsterdam</h4>



                <small className="smalltitle">Previously (2013 - 2016)</small>
                <h4 className="xp-title">UX Designer at icflix.com, Dubai</h4>



                <small className="smalltitle">Earlier (2011 - 2013)</small>
                <h4 className="xp-title">Senior Web Designer at Go-Gulf.com, Dubai</h4>

                <small className="smalltitle">Current Side Projects</small>

                <p><a href="https://github.com/rosanusi/project_journal">Project Journal</a>, <a href="https://quran-curious-mind.netlify.com/">Quran for the curious minds</a>, <a href="https://github.com/rosanusi/notes">Notes App</a>, <a href="https://github.com/rosanusi/watchbox">Watchbox</a></p>




                <small className="smalltitle">Recent Books</small>

                <Books />
                

            </div>

        </div>

        


    </Layout>

)

export default Profile;


export const pageQuery = graphql`
    query {

        imageTwo: file(relativePath: { eq: "personal/personal-01.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },

    }
`