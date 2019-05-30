import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const Profile = (props) => (
    <Layout>
        <SEO title="icflix.com | Middle East Movie streaming platform" />
        
        <div className="rdwn-grid-container">

            <div className="rdwn-main-section">
            
                <div className="rdwn-bio_copy profile">

                    <h2 className="rdwn-pagetitle">My Profile</h2>

                    <p className="rdwn-bio_copy__main">I'm a designer that works on digital products.</p>
                    <p>Few years ago, if you asked me what my job was, I would throw some words at you; ux architect, designer and so on. Today, the more I understand the role design plays in business and the world we live in, the less I care about what my title says, what kind of seat I have at the table or what's the best border-radius to use.</p>
                    <p>For designers to be able to help business grow and improve the lives of their customers, they must get out of their desks and their heads to work with everyone around them; from understanding the problem to validating the solution.</p>
                    <p>This is what I believe in and this is what I do everyday.</p>


                    {/* <div className="rdwn-bio-subsection">
                        <h3 className="rdwn-bio_copy__smalltitle">Skill Sets</h3>
                        <p>Journey Mapping, User Flows, Wireframing, Prototyping, Visual Design</p>
                    </div>

                    <div className="rdwn-bio-subsection">
                        <h3 className="rdwn-bio_copy__smalltitle">TOOLS</h3>
                        <p>Balsamiq, Pen &amp; Paper, Sketch, Figma, Framer, Invision, Protopie, HTML/CSS, Javascript (+ Reactjs)</p>
                    </div> */}

                    <div className="rdwn-bio-subsection">
                        <h3 className="rdwn-bio_copy__smalltitle">Currently</h3>

                        <h4>User Experience designer at booking.com, Amsterdam</h4>
                        <p>Since 2016, I’ve worked within different agile teams in various areas of 
                            the business, solving problems on both customer-facing and partner-facing 
                            platforms. 
                        </p>
                        <p>We use various methods of user research, design thinking processes and a/b testing to understand the problem space and validate our ideas, to improve the experience of our users.</p>

                        <p>My role as a designer revolves around facilitating design thinking processes, leading strategic design decisions and producing various ux artefacts that help the team solve our customers’ and partners’ pain points while finding opportunities for business growth.</p>
                    </div>


                    <div className="rdwn-bio-subsection">
                    <h3 className="rdwn-bio_copy__smalltitle">Previously (2013 - 2016)</h3>

                    <h4>UI/UX Designer at icflix.com, Dubai</h4>
                    <p>A content streaming startup that offers Arabic, Hollywood and Bollywood contents in the Middle East.</p>
                    <p>I played a major role in the design strategy of these platforms. I helped design designs for various platforms and worked closely with the engineering team, marketing team and otehr stakeholders to deliver these designs the world. </p>

                    </div>

                    <div className="rdwn-bio-subsection">
                        <h3 className="rdwn-bio_copy__smalltitle">Active Side Projects</h3>

                        <p><a href="https://quran-curious-mind.netlify.com/">Quran for the curious minds</a>, <a href="https://github.com/rosanusi/project_journal">Project Journal</a>, <a href="https://github.com/rosanusi/notes">Notes App</a>, <a href="https://github.com/rosanusi/watchbox">Watchbox</a></p>

                    </div>



                    <div className="rdwn-bio-subsection">
                        <h3 className="rdwn-bio_copy__smalltitle">Other activities</h3>

                        <p>When I'm not designing, you can find me fiddling with my Maschine MK2 sampling old records to make boombap beats.</p>

                    </div>




                    {/* <Github />
                    <Books />
                    <Footer />  */}

                </div>    
            </div>
        </div>
    </Layout>

)

export default Profile;