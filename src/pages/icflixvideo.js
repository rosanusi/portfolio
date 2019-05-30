import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IcflixVideo = (props) => (
  <Layout>
    <SEO title="Busola Sanusi | Custom video player redesign for icflix" />
    

    <div className="rdwn-container-works">

        {/* <Nav /> */}

        <div className="rdwn-works-main">

            <div className="rdwn-work-copy">
                <div className="brief">
                    <h3 className="title">Custom video player redesign for icflix</h3>
                        <span className="date">2015</span>
                        <p>As icflix continues to improve their product across platforms, one major pain points that we always came across from our customers was the difficulty in using the web video player. Most common insight was that video player controls were too small and sometimes one has to to pay close attention to hit the right icon. Some told us the video player being horizontal makes it difficult to interact with.</p>
                        <p>We planned on adding new features to the video player; audio/subtitles selection, streaming quality options, post-watch recommendations, We thought it made sense to redesign the video player.</p>
                </div>


            </div>
 
            <div className="workImage">
                <Img fluid={props.data.imageOne.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Responsibility</h6>
                <p>During my time at icflix, I was responsible for looking for ux opportuities in our products. And just like other projects, I was responsible driving the design side of the project from start to go-to-market. During the process, I made a visual audit, conducted comparative analysis, created research questions in form of a survey, created wireframes, made hi-fi prototypes and delivered the designs.</p>
            </div>

            <div className="rdwn-work-copy">
                <h6 className="small-title">Combing through other web platforms</h6>
                <p>Most common insights were that video player controls were too small and sometimes have to pay close attention to hit the right icon. Some told us the video player being horizontal makes it difficult to interact with.</p>
            </div>

            <div className="workImage">
                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageThree.childImageSharp.fluid} />
            </div>

            <div className="rdwn-work-copy">
                <p>We ran a compare analysis to see the common features among competitors.  To understand better, we created a survey on our video player page to understand better what the expectations of our customers are.</p>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFour.childImageSharp.fluid} />
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Designing the player</h6>
                <p>Equipped with all these insights and the result of the visual audit of other popular apps, we had enough to start designing.</p>
            </div>


            <div className="workImage">
                <Img fluid={props.data.imageFive.childImageSharp.fluid} />
            </div>

            <div className="workImage">
                <Img fluid={props.data.imageSix.childImageSharp.fluid} />
            </div>            

            <div className="workImage small">
                <Img fluid={props.data.imageEight.childImageSharp.fluid} />
            </div>    

            
            <div className="rdwn-work-copy">
                <h6 className="small-title">Visual Design</h6>
                <p>I worked very with the engineering team to fine tune the interaction of the control buttons and secondary UIs on the player. 
Hi-Fi prototype helped in showing how the player should work and feel.</p>
            </div>




            <div className="workImage">
                <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
            </div>     

            <div className="rdwn-work-copy">
                <h6 className="small-title">Feedback and iterations</h6>
                <p>The new design was introduced to the UAE customers first. We created a different survey to check how customers are receving the new video player.</p><p>We got feedback which we would review with some of the engineers and the project manager to prioritize based on the importance of the pain points. We iteratively introduced new changes and updates to this player. It was launched globally after series of re-iterations.</p>
            </div>


            <div className="rdwn-work-copy">
                <h6 className="small-title">Conclusions: Some missed opportunities</h6>
                <p>Enjoyed working on this project alot as it was relatively different from regular page-to-page design. After some time though, I kept feeling there were missed opportunities because the ideating phase was really weak. I wanted us to design three different player control styles andallowed customers to choose whichever suits their playing styles. While everyone agreed it was a great idea to do this, time wasn't our best friend.</p>
            </div>
             
        </div>

    </div>

  </Layout>
)

export default IcflixVideo

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "works/icflixvid/icflixvid1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(relativePath: { eq: "works/icflixvid/icflixvid2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageThree: file(relativePath: { eq: "works/icflixvid/icflixvid3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFour: file(relativePath: { eq: "works/icflixvid/icflixvid4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageFive: file(relativePath: { eq: "works/icflixvid/icflixvid5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSix: file(relativePath: { eq: "works/icflixvid/icflixvid6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        imageSeven: file(relativePath: { eq: "works/icflixvid/icflixvid7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }


        imageEight: file(relativePath: { eq: "works/icflixvid/icflixvid8.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
