import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const Project = (props) => (
  <Layout>
    <SEO title="icflix.com | Middle East Movie streaming platform" />
    

    <div className="rdwn-container-works">

        {/* <Nav />  */}

        <div className="rdwn-works-main">

            <div className="rdwn-works-content">
                <div className="brief">
                    <h3 className="title">Product Improvement for Booking.com Partner Program</h3>
                    <p> Preferred Partner is an exclusive status we offer to our high-performing properties. Preferred properties will get extra visibility in the search results, next to a thumbs-up sign.A larger number of customers can easily see that we recommend your property as one performing well on Booking.com – and one that’s popular with bookers.</p>

                    <p>This is a case study on a project I worked on that is internal facing to the partners of booking.com. As a result, I have anonymized the data and details that are confidential.</p>
                </div>

                <div className="resp">
                    <span className="date">2018</span>
                    <p>Strategy, User Experience, User Interfaces, HTML/CSS</p>
                    <p>Across major platforms : Web, iOS, Android, TV, XBox, Playstation </p>
                </div>
            </div>

            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>


                <h6 className="small-title">Problem</h6>
            
                <p>From a “partner perspective survey” ran by our researchers, we understood that some partners were not aware of the existence of the program and a certain percentage of preferred members were not happy with it. When asked why the latter are dissatisfied, 4 major points came up the most;</p>

                <ul>
                    <li>
                        <h5>Perceived Performance</h5>
                        <p>many of them point to us they have not seen any results from being part of the program</p>
                    </li>
                    <li>
                        <h5>Cost</h5>
                        <p>Some think they might be paying too much</p>
                    </li>
                    <li>
                        <h5>Competition &amp; Eligibility</h5>
                        <p>Some others think it’s not exclusive enough; there are many partners on it. They believe there’s no quality assessment criteria.</p>
                    </li>
                </ul>




            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>




                <h6 className="small-title">Better understanding</h6>
                <p>To have a better knowledge of the problems our partners were facing, we decided to do a partner visit to one of the cities with the highest number of preferred partners to interview some of them. We also organized a remote user interview to talk to 10 preferred partners from different countries.</p>

                <p>Based on the feedback from the interviews, the user researcher came up with the major insights from the research.</p>

                <ul>
                    <li>
                        <p>Partners need  more data on how the program performs  for them.</p>
                    </li>
                    <li>
                        <p>Potential members will like to see performance data of the program and be able to evaluate it.</p>
                    </li>
                    <li>
                        <p>Partners do not know there’s limit on the percentage of partners that can be in the program</p>
                    </li>
                    <li>
                        <p>Value proposition of the program is not clear to some potential members.</p>
                    </li>
                </ul>

    


                <h6 className="small-title">Full Day Design Workshop</h6>
                <p>To make sense of this, we decided to run a design workshop with the aim of mapping the pain points to the entire partner journey, prioritizing top design problems to tackle and create short term plans of moving forward with the next step.</p>



            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>



                <p>After a whole day of different design thinking exercises, we came up with outcome of the workshop;</p>

                <ul>
                    <li>
                        <p>a mapped out partner journey with pain points</p>
                    </li>
                    <li>
                        <p>“How might we” questions</p>
                    </li>
                    <li>
                        <p>Short term planning and prioritization</p>
                    </li>
                </ul>


             <div className="rdwn-image-wrap">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div> 

            <div className="rdwn-image-wrap">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div> 


                <p>Based on business value and complexity, our project manager prioritized showing the value of the program to preferred members. This is a great decision and we all agreed that some of the other pain points could benefit from the byproduct of solving this particular problem. </p>


            <div className="rdwn-image-wrap">
                <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>


                <h6 className="small-title">Brainstorming Session</h6>
                <p>I organized a brainstorming session with the whole team  to brainstorm on “how might we show our partners the value of being a preferred member?”.  We used the silent brainstorming technique to allow people bring divergent ideas without influencing each other. After the silent session, each participants paste their post-its and explained the ideas they are proposing. Afterwards, we did dot-voting on the post-its and the post-it with most votes becomes solution to prototype.</p>



            <div className="rdwn-work-copy">
                <blockquote>
                    <p>Creating the dashboard that shows our partners their ROI and generally how they are doing in the preferred program, we believe, will give them insight on how they are doing as preferred partners and also change their minds regarding the cost if the ROI is positive for them. As a result of that, hopefully, the partner will not opt-out of the program…</p>
                </blockquote>
            </div>            
            

                <p>Once we agreed on the idea to prototype, we did another round of silent brainstorming. This time combined with figuring storming technique. This allows all of us put ourselves in the shows of our partners and answer the question, </p>

                <p>What is it that I will like to see to properly inform me of my performance in the preferred partner program?</p>

                <p>Again with dot-voting, we came up with major ideas that we can put on a dashboard prototype for validation from our partners.</p>


            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>




                <h6 className="small-title">Prototype with Invision</h6>
                <p>Other things we can measure are  Engagements  and also how they respond to things we likely  upsell on the page.</p>



                    <Img fluid={props.data.imageEight.childImageSharp.fluid} />




                <h6 className="small-title">Measuring Success</h6>
                <p>Our main reason for creating the dashboard is to provide our preferred partners information on how they are doing in the program, and hopefully stay in the program. Hence, the best way to measure its effectiveness will be to measure “Partner churn”</p>

                <p>Other things we can measure are  Engagements  and also how they respond to things we likely  upsell on the page.</p>



                <h6 className="small-title">Validating design with our partners</h6>
                <p>Alright Alright Alright</p>



            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            </div>

            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            </div>


                <h6 className="small-title">The visual design</h6>
                <p>Need to write this</p>


            <div className="rdwn-image-wrap">
                    <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
            </div>

            

                <h6 className="small-title">Conclusion</h6>
                <p>Need to write this</p>


             
        </div>

    </div>

  </Layout>
)

export default Project

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/preferred/pref1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/preferred/pref2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/preferred/pref3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFour: file(relativePath: { eq: "works/preferred/pref4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFive: file(relativePath: { eq: "works/preferred/pref5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSix: file(relativePath: { eq: "works/preferred/pref6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageSeven: file(relativePath: { eq: "works/preferred/pref7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageEight: file(relativePath: { eq: "works/preferred/pref8.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageNine: file(relativePath: { eq: "works/preferred/pref9.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageTen: file(relativePath: { eq: "works/preferred/pref10.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageEleven: file(relativePath: { eq: "works/preferred/pref11.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
