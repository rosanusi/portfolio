import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import mainVideo from '../video/pref.mp4'
// import Anime, {anime} from 'react-anime';



const Preferred = (props) => (
  <Layout>
    <SEO title="Ridwan Sanusi | Dashboard for booking.com's Preferred Partners" />
    

    <div className="rdwn-container-works">

        {/* <Nav />  */}


        <div className="rdwn-works-main">

            <div className="rdwn-work-head">
                {/* <h1 className="rdwn-bio_copy__name">back to home</h1> */}
                <p className="rdwn-bio_copy__main">
                    {/* <Anime  
                        opacity={[0, 1]}
                        easing="easeInOutQuad"
                        delay={700}
                    > */}
                        Program dashboard for Booking.com's exclusive partner program
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
                    <p>Preferred Partner Program is an exclusive status offered to high-performing properties. Preferred properties get extra visibility in the search results and an exclusive badge. Because this was a partner-facing project, I have blurred the header to hide sensitive information, used mock data and only talk about the external parts of the project.</p>
                    {/* </Anime> */}
                </div>

            </div>



            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                </div>
            </div>



            <div className="rdwn-work-copy">
                <h6 className="title">Responsibility</h6>

                <div className="details">
                    <p>I worked within an agile team of 6 consisting of the product manager, marketing manager, researcher, UX writer, client-side developer and backend developer. My role was to lead the design effort of the project with support from the Product owner and collaborate with various stakeholders to drive the project from initial beginning to go-to-market.
                    </p>
                </div>
            </div>



            {/* <div className="rdwn-work-copy big">
                <small className="smalltitle">Problem</small>
            
                <div className="details">
                    <p>Through various “awareness survey” reports, we understood that some partners were not aware of the existence of this program and some others were not having a satisfying experience while in it.</p>
                </div>  

            </div> */}


            <div className="rdwn-work-copy">
                <h6 className="title">Understanding the paint points</h6>
                <div className="details">
                <p>Through various “awareness survey” reports, we understood that quite a large percentage of preferred partners were not aware of the value the program brings to their business.</p>
                <p>In order to dig deeper into the root of this problem, we conducted an evaluative research to understand partners' current experience with the program. We decided to focus on the three major pain points most participants mentioned the most.</p>
                </div>
            </div>


    
            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                </div>
            </div>





            <div className="rdwn-work-copy">
                <h6 className="title">Design Workshop</h6>

                <div className="details">

                    <p>Armed with our research insights, we organized a design workshop to explore various ideas using "How Might We" method to brainstorm potential solutions. At the end of the workshop, We were able to converge on the a proposed solution of creating a dashboard that shows both current preferrred and non-preferred partners the value of being in the program.</p>

                </div>
            </div>
    
            
            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                </div>
            </div>


            <div className="rdwn-work-copy">
                
                <h6 className="title">Ideation Phase</h6>

                <div className="details">

                    <p>I facilitated another design session with the whole team to explore <span className="highlight">“how might we show our partners the value of being a preferred member?”</span>.  This time, we used the silent brainstorming technique to allow people bring in divergent ideas. Each participants pasted their post-its and explained the ideas to the rest of us. Afterwards, we did dot-voting on the post-its to help us converge on one proposed solution;</p>

                    {/* <blockquote>
                        <p>“We will create a dashboard that shows our partners the ROI of being a preferred member.  We believe seeing a positive result will convince our partners that being in the program is indeed valuable to their business. Thus, less partners will leave the program.”</p>
                    </blockquote> */}

                    <p>Once we agreed on the idea to prototype, we did another round of silent brainstorming. This time combined with figuring storming technique. This allowed us put ourselves in the shoes of the partners and answer questions about what is it that we will like to see which will properly inform us of the performance of our business in the preferred partner program?” </p>

                    <p>We voted on major ideas that we can put on a dashboard prototype for validation from partners.</p>

                </div>
            </div>
           
           
           
           
            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageFour.childImageSharp.fluid} />
                </div>
            </div> 



            <div className="rdwn-work-copy">
                <h6 className="title">Initial sketches</h6>
                    <div className="details">
                        <p>At this stage, we believe we have sufficient concrete ideas to design. I started exploring ideas on paper and then turned those into wireframes for an MVP.</p>
                    </div>
            </div>



            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageFive.childImageSharp.fluid} />
                </div>
            </div>


            <div className="rdwn-work-copy">
                <h6 className="title">Partner understanding &amp; perception</h6>
                <div className="details">
                    <p>I created the first draft of the design and shared with the rest of the team and other stakeholders for feedback on the direction. I collaborated with both UX  Writer and Marketing Manager on the content strategy. Took the mockup to our design critique session for feedback from the UX community in preparation to test with the partners.</p>
                    <p>The goal of the research this time was to understand how partners perceive the proposed solution. We got valuable feedback that helped us further refine the design of the dashboard.</p>
                </div>
            </div>

            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageSix.childImageSharp.fluid} />
                </div>
            </div>







            <div className="rdwn-work-copy">
                <h6 className="title">The solution</h6>
                    <div className="details">
                        <p>We refined the initial designs based on all the feedback we've got from our partners and also internally from the UX community. Also prototyped some of the interactions to help collaborating with the engineers easier.</p>
                    </div>
            </div>




            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
                </div>
            </div>

            <div className="rdwn-video-container">
              <video src={mainVideo} type="video/mp4s" autoPlay loop controls/>
            </div>


            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageNine.childImageSharp.fluid} />
                </div>
            </div>


            <div className="workImage">
                <div className="img-container">
                    <Img fluid={props.data.imageEight.childImageSharp.fluid} />
                </div>
            </div>

            <div className="rdwn-work-copy">
                <h6 className="title">Measuring Success</h6>
                <div className="details">                
                    <p>With the pain points in our minds, we believe the best way to measure the value of the dashboard will be to monitor partner churn. We also believe the next awareness survey will show improved result if our solution worked. We continued to iterate on the dashboard based on feedback from partners, Introduced new changes and updates using our internal a/b testing platform.</p>
                </div>
            </div>
             
        </div>

    </div>

  </Layout>
)

export default Preferred

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/preferred/pref-main.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageTwo: file(relativePath: { eq: "works/preferred/pref-painpoints.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageThree: file(relativePath: { eq: "works/preferred/pref-workshop.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFour: file(relativePath: { eq: "works/preferred/pref-dashstructure.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageFive: file(relativePath: { eq: "works/preferred/pref-sketch.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageSix: file(relativePath: { eq: "works/preferred/pref-partnerfb.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },

        imageSeven: file(relativePath: { eq: "works/preferred/pref-otherpages.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },

        imageEight: file(relativePath: { eq: "works/preferred/pref-dashproto.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
        imageNine: file(relativePath: { eq: "works/preferred/pref-otherpages2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536){
                ...GatsbyImageSharpFluid
                }
            }
        },
    }
`