import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const Preferred = (props) => (
  <Layout>
    <SEO title="Busola Sanusi | Dashboard for booking.com's Preferred Partners" />
    

    <div className="rdwn-container-works">

        {/* <Nav />  */}

        <div className="rdwn-works-main">

            <div className="rdwn-work-copy">
                <div className="brief">
                    <h2 className="title">Product Improvement for Booking.com Partner Program</h2>
                    <span className="date">2018</span>
                    <p> At booking, Preferred Partner is an exclusive status we offer to our high-performing properties. Preferred properties get extra visibility in the search results and a badge. A larger number of customers can see that we recommend these properties because of their performance – and that they are popular with bookers.</p>

                    <p>This is a case study on a project I worked on that is internal facing at booking.com. As a result, I have anonymized the data and only talked about the external parts of the project.</p>
                </div>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Responsibility</h6>
                <p>
                    I worked within an agile team of 6 consisting of the product manager, marketing manager, researcher, ux writer, client-side developer and backend developer. 
                </p>
                <p>
                I was responsible for the design direction of the project. Organized project kick-off with support from the product manager.  Collaborated with the researcher to further understand the problem and validate proposed solution. Organized brainstorming sessions and design workshops. Collaborated with the ux writer and marketing manager on the marketing strategy of the product and delivered final designs.

                </p>
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Problem</h6>
            
                <p>From a “partner awareness survey” ran by our researchers, we understood that some partners were not aware of the existence of the program. Some others were not happy with it. When asked why they are not satisfied, three major points came up the most;</p>

            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="small-title">Better understanding</h6>
                <p>It was important to further understand our partners' paint points. So, we decided to do a partner visit to one of the cities with highest representation of preferred partners to interview some of them. We also organized a remote user interview to talk to more preferred partners from different markets.</p>

                <p>Based on the feedback from the interviews, the user researcher came up with the major insights from the research.</p>

                <ul>
                    <li>
                        <p>Partners need more data on how the program performs for them.</p>
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

            </div>
    
            
            <div className="workImage">
                    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Full Day Design Workshop</h6>
                <p>We wanted to explore all these further. We ran a design workshop to map the pain points to the entire partner journey. At the end of it, we prioritized top design problems to tackle and created short term plans for moving forward with the next step.</p>

                <p>After a whole day of different design thinking exercises, we came to our intended outcome of the workshop;</p>

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
            </div>

             <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div> 

            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div> 

            <div className="rdwn-work-copy">
                <p>Based on business value and complexity, the project manager prioritized showing value of the program to preferred members. This is a great decision and we all agreed that some of the other pain points could benefit from the byproduct of solving this particular problem. </p>
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Brainstorming Session</h6>
                <p>I organized a brainstorming session with the whole team  to explore “how might we show our partners the value of being a preferred member?”.  We used the silent brainstorming technique to allow people bring divergent ideas. Each participants pasted their post-its and explained the ideas to the rest of us. Afterwards, we did dot-voting on the post-its to converge to one proposed solution;</p>
            </div>


            <div className="rdwn-work-copy">
                <blockquote>
                    <p>We will create a dashboard that shows our partners the ROI of being a preferred member. This will change their minds about the cost of the program. And as a result, the partner will not leave the program</p>
                </blockquote>
            </div>            
            
            <div className="rdwn-work-copy">
                <p>Once we agreed on the idea to prototype, we did another round of silent brainstorming. This time combined with figuring storming technique. This allowed us put ourselves in the shoes of the partners and answer the question -</p>

                <blockquote>
                    <p>"What is it that I will like to see to properly inform me of my performance in the preferred partner program?"</p>
                </blockquote>


                <p>We voted on major ideas that we can put on a dashboard prototype for validation from partners.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Design explorations</h6>
                <p>I started design exploration by doing visual audits on a lot dashboards on the web. I started by defining the grid to display all the information of the dashboard. I created a template for that and created my explorations there.</p>
            </div>


            <div className="workImage small">
                    <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Invision Prototype &amp; Feedback sessions</h6>
                <p>I created the first draft of the design and shared with various stakeholders for feedback and comments on the direction. I collaborated with both ux writer and marketing manager on the copy strategy. Took the mockup to our design lab for feedback from the community. And prepared it in a prototype to test with our partners.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageEight.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="small-title">Partner Lounge test</h6>
                <p>We took the mockup for a lounge open question concept test. The goal was to understand how partners perceive the new dashboard.</p>

                <p>We got feedback that we can add to the dashboard to further help them assess the value of the program. They found the dashboard useful especially the competitive chart. They asked for more data on different metrics and will like to have more competitive information. Other feedback that we got pointed to distrust in the calculation of the data and ask for explanation in the dashboard.</p>
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            </div>



            <div className="rdwn-work-copy">
                <h6 className="small-title">The visual design</h6>
                <p>While we continue to explore possibilities of more data, we got enough positive feedback to go ahead with a soft-launch.</p>
            </div>


            <div className="workImage">
                    <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Measuring Success</h6>
                <p>We created the dashboard to show preferred partners how they perform in the program. We hypothesis is that, When partners see positive metrics, they are happy to stay in the program. Hence, the best way to measure its effectiveness will be to measure “Partner churn”.</p>

                <p>Other things we can measure are engagements and also how they respond to things we likely up-sell on the page.</p>
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Conclusion</h6>
                <p>We continued to iterate on the dashboard based on feedback from partners. Introduced new changes and updates using our internal experimentation tool.</p>
            </div>

             
        </div>

    </div>

  </Layout>
)

export default Preferred

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/preferred/pref1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/preferred/pref2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: { eq: "works/preferred/pref3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFour: file(relativePath: { eq: "works/preferred/pref4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFive: file(relativePath: { eq: "works/preferred/pref5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSix: file(relativePath: { eq: "works/preferred/pref6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageSeven: file(relativePath: { eq: "works/preferred/pref7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageEight: file(relativePath: { eq: "works/preferred/pref8.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageNine: file(relativePath: { eq: "works/preferred/pref9.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageTen: file(relativePath: { eq: "works/preferred/pref10.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageEleven: file(relativePath: { eq: "works/preferred/pref11.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageTwelve: file(relativePath: { eq: "works/preferred/pref12.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageThirteen: file(relativePath: { eq: "works/preferred/pref13.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
