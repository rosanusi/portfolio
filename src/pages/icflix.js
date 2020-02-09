import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Nav from '../components/nav'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import mainVideo from '../video/icflixsmart.mp4'
import videoProto1 from '../video/icflix-horizontal.mp4'
// import Anime, {anime} from 'react-anime';


const Icflix = (props) => (
<Layout>
    <SEO title="Ridwan Sanusi | Redesign of icflix Smart TV app" />
    



        {/* <Nav /> */}

        <div className="rdwn-works-main">

            <div className="rdwn-work-head">
                <p className="rdwn-bio_copy__main">
                    {/* <Anime  
                        opacity={[0, 1]}
                        easing="easeInOutQuad"
                        delay={700}
                    > */}
                        Redesigning icflix smart tv app
                    {/* </Anime> */}
                </p>
            </div>


            <div className="rdwn-work-copy">
                <div className="details">
                    {/* <Anime  
                        opacity={[0, 1]}
                        easing="easeInOutQuad"
                        delay={500}
                    > */}
                        <small className="smalltitle">Strategy, Research, UX, UI, Prototype</small>
                        <p className="sub">Just like the website and iOS app, the intial icflix smart tv app in the market wasn't offering anything besides playing content. As our mobile apps and website got redesigned with new features added, it became important that we visited and revamped the smart TV app.</p>
                    {/* </Anime> */}
                </div>
            </div>




            <div className="workImage">
                    <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            </div>


            {/* <div className="rdwn-work-copy">
                <h6 className="title">Responsibility</h6>

                <div className="details">
                    <p>I was responsible for the design strategy of the project. I collaborated with the product manager in getting by-in from the leadership team, defining the scope of the redesign and setting priorities. I delivered all UX artefacts for the product including delivering the visual and interaction design of the “final” product.</p>
                </div>
            </div> */}



            <div className="rdwn-work-copy">
                <h6 className="title">Discovering the problems</h6>
            
                <div className="details">
                    <p>With a tight deadline to get the new version to the market, we had to do minimal generative research at the beginning to get the size and understand the problem to solve.</p>
                    <p>We had a questionnaire attached in a feedback email that gets randomly sent to customers whenever they were done watching something on the tv app. At this point, we had collected significant amount of feedback from customers and all we had to do was peruse this data.</p>
                    <p>We opted for an open sorting system. Each of the members of the team organized the data we got in themes. After the sorting exercise, I facilitated a synthesis session with the rest of the team to find the recurring themes in all that we’ve gathered so far. Indeed, we saw some of the themes converged and found major customer pain points and needs.</p>
                </div>

            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="title">What we want</h6>
                <div className="details">
                    <p>Whle the redesign was important to bring feature parity to all the platforms, we also believe our attempt to solve these pain points should lead to customers viewing more on their tv app.</p>
                </div>
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="title">Tasks &amp; Flows</h6>
                <div className="details">
                    <p>I created user flows for the pain points. Shared and deliberated on them during alignment session with the engineering team. It was important to get feedback on some of the proposed ideas before moving forward. I spent some time thinking on paper, whiteboard and eventually wireframe.</p>
                </div>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="title">Wireframes</h6>
                <div className="details">
                    <p>The overarching principle of creating a simple experience was clear. I created wireframes to show this and get support from stakeholders. It also helped in collaborating with the engineering team to align our thoughts on how some of the complex features will work on smart tv.</p>
                </div>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="title">Visual Designs</h6>
                <div className="details">
                    <p>Designed the interaction with a lot more focus on the content and how the interaction works. I designed the featured content with a cover image and details that change as users scroll. The choice of this was to attract users to the most interesting content currently available on the app. </p>
                </div>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>
            

             
            <div className="rdwn-video-container">
              <video src={mainVideo} type="video/mp4s" autoPlay loop controls/>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="title">Design decisions</h6>
                <div className="details">
                    <p>I also made a decision to have the horizontal scroll pattern on the home screen as against having a “see more” button that takes them to another screen in each categories. The belief here is that going back and forth between screens will cause discovery fatigue. With the horizontal scrolling, you keep going until you find what to watch or move to another category.</p>
                </div>
            </div>



            <div className="rdwn-video-container">
              <video src={videoProto1} type="video/mp4s" autoPlay loop controls/>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageEight.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="title">Takeaways</h6>
                <div className="details">
                    <p>The new version we designed solved lot of issues from the first version. Left the company during the implementation phase of this project. So, I wasn’t there to see it roll out to the market. There were various lessons learned during the design that has formed some of the core beliefs I have about design today. We changed our direction like three times during the design of this project. From the result of it, it was all great decisions to do that. </p>
                    <p>Now, I have learnt to enjoy the unexpected turns in the design process. Also, taking people along during the design phase, facilitating design sessions with them empowers people creatively and helps in getting stakeholder approvals easily. It’s also rewarding as it allows people to be proud to own the project and contribute proactively towards the success of it.</p>
               </div>
            </div>

             
        </div>

  </Layout>
)

export default Icflix

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/icflix/icflix-problems.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/icflix/icflix-userflow.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/icflix/icflix-sketches.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/icflix/icflix-flows.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/icflix/icflix-wireframes.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/icflix/icflix-uicomps1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSeven: file(relativePath: { eq: "works/icflix/icflix-continue.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageEight: file(relativePath: { eq: "works/icflix/icflix-player.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "works/icflix/icflix-continue2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTen: file(relativePath: { eq: "works/icflix/icflix-main.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`