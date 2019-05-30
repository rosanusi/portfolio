import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import mainVideo from '../video/icflix.mp4'


const Icflix = (props) => (
<Layout>
    <SEO title="Busola Sanusi | Redesign of icflix Smart TV app" />
    



        {/* <Nav /> */}

        <div className="rdwn-works-main">

            <div className="rdwn-work-copy">
                <div className="brief">
                    <h3 className="title">icflix smart tv app</h3>
                    <span className="date">2016</span>
                    <p>Since 2011, smart tv penetration is one of the increasing sources of consumption by users in the region. The consumption has gone up to 40% as predicted and the UAE takes the lead in the Smart TV market share. The traditional model of watching TV is dying. People are replacing that with a model which gives them ability to watch what they want at the time they want.</p>
                    <p>As an mvp, the current version of icflix smart tv app allows users to watch contents - nothing more than that. As our mobile apps and website got redesigned with improved user experience, it became important we revamped the smart TV app also.</p>
                </div>
            </div>
 
            <div className="rdwn-video-container">
              <video src={mainVideo} type="video/mp4s" autoPlay loop controls/>
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Responsibility</h6>
                <p>Being a UX team of one and a startup where everyone's looking at design to lead the way, I was responsible for the design direction of the project. I collaborated with the product manager in defining the scope of the project and setting priorities. I delivered all ux artefacts for the project including the viual design of the "final" product.</p>
                <p>Having a tight deadline to get the new version to the market, we had to do minimal research at the beginning to understand the problem to solve and relied on lean approach to iteratively bring updates to the app.</p>
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Problems to solve</h6>
                <p>We have always collected feedback from our customers after watching any content on our platform. We had a questionnaire email that gets randomly sent to customers immediately after watching on the smart tv app. At this point, we had collected over 100 feedback from customers. We started our research from the data we got from these questionnaires.</p>
                <p>We divided the results between one another. Each of us looked into the data to find insights around customer needs, pain points and behaviors about their experience using the app.</p>
                <p>We had no idea what we were going to find or even if we would find anything useful. So, we opted for an open sorting system. Each participants will organize the data they got in themes. </p>
                <p>After this exercise, I organized a design session with the rest of the team to find common themes in all that we’ve gathered so far. We all posted our findings on the wall using stickies to organize them in themes. We saw some of the themes converged and found major customer pain points and needs.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Getting them out in flows</h6>                
                <p>I fleshed out some ideas for solving the pain points. The idea was to present this flow to others and the stakeholders. Based on their feedback,  I would either iterate or move forward to designing wireframes.</p>
                <p>Started by designing the high level flow of the app. Every other thing we design will be based on this simple approach. </p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">           
                <p>I moved to creating user flows for the pain points. Shared it during  alignment session to gather feedback from the engineering team. It was important that the ideas were workable for development.</p>
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Authentication &amp; Payment flows</h6>
                <p>We went back and forth on the flows for payments. Only few payment providers supported the smart tv then. We had to find ways tv and mobile can work well together to support local payments in the region.</p>
            </div>


            
            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Wireframes</h6>
                <p>The overarching principle of simpler experience was clear. I created wireframes to show this and get support from stakeholders. It also helped in collaborating with the engineering team to align our thoughts on some of the complex features will work on smart tv.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Visual Designs</h6>
                <p>After relevant stakeholders were well aligned on the direction we were going, I went ahead with the visual design of the screens.</p>

                <p>As represented in the wireframe, I designed the featured content with a cover image and details that changes as users scroll. This is the best way to attract users to the most interesting content currently available on the app. For users who prefer to discover content based on the genre, it made sense to make this easier by placing the category section up there.</p>

                <p>I also made a decision to have the horizontal scroll pattern on the home screen as against having a "see more" button that takes them to another screen in each categories. The belief here is that going back and forth between screens will cause discovery fatigue. With the horizontal scrolling, you keep going until you find what to watch or move to another category.</p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <span className="small-title">Conclusion</span>
                <p>The new version we designed solved lot of issues from the first version. I left the company during the implementation phase of this project. So, I wasn't there to see it go to the entire market.</p>

                <p>There were various lessons learned during the design that has formed some of the core believes i have about design today. We changed our direction like three times during the design of this project. I learnt that sometimes this is ok. From the result of it all, it was all great decisions to do that.</p>
                
                <p>Now, I have learnt to enjoy the unexpected turns in the design process. Also, taking people along during the design phase, facilitating design sessions with them, empowers people creatively and helps in getting stakeholder approvals easily. It's also rewarding as it allows people to be proud to own the project and contribute proactively towards the success of it.</p>
            </div>
             
        </div>

  </Layout>
)

export default Icflix

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/icflix/icflix1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/icflix/icflix2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageThree: file(relativePath: { eq: "works/icflix/icflix3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFour: file(relativePath: { eq: "works/icflix/icflix4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFive: file(relativePath: { eq: "works/icflix/icflix5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSix: file(relativePath: { eq: "works/icflix/icflix6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSeven: file(relativePath: { eq: "works/icflix/icflix7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
