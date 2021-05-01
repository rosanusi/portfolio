import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1]
const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Works = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    const data = useStaticQuery(graphql `
        query Images {
            imageOne: file(relativePath: { eq: "works/icflix/new-icflix-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            imageTwo: file(relativePath: { eq: "works/preferred/new-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            imageThree: file(relativePath: { eq: "works/swiffix/new-swiffix-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            imageFour: file(relativePath: { eq: "works/play/play-cover.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
        }
    `)


    return (
        <div className="worksMain my-20">    
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 px-8 md:mb-20 mb-10">
                    <div className="sectionTitle md:col-start-2 md:col-span-4 col-start-1 col-span-9 text-xl md:text-2xl">
                        <h3 className="">Some past works</h3>
                        <small className="text-xl md:text-2xl text-gray-600">Design strategy, Research, Interaction design, prototyping.</small>
                    </div>
                </div>
                <ul className="grid grid-cols-12 gap-4 px-8 text-xl">
                    <li className="col-span-12 md:col-span-6 mb-8 imageContainer">
                        <Link to="/icflix/">
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <div className="imageContainer"><Img fluid={data.imageOne.childImageSharp.fluid} /></div>
                        <div className=" md:mt-8 mt-4 max-w-xs leading-tight">
                                <h3 className="text-base md:text-xl">Icflix</h3>
                                <small className="text-base md:text-xl text-gray-600">On-demand home service platform for Swiffix</small>
                        </div>
                        </animated.div>
                        </Link>
                    </li>
                    <li className="col-span-12 md:col-start-8 md:col-span-5 md:-mt-24 mb-8 imageContainer">
                        <Link to="/preferred/">
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <div className="imageContainer"><Img fluid={data.imageTwo.childImageSharp.fluid} /></div>
                        <div className=" md:mt-8 mt-4 max-w-xs leading-tight">
                                <h3 className="text-base md:text-xl">Booking.com</h3>
                            <small className="text-base md:text-xl text-gray-600">Program dashboard for Booking's exclusive partner program</small>
                        </div>
                        </animated.div>
                        </Link>
                    </li>

                    <li className="col-span-12 md:col-start-2 md:col-span-5  md:mt-12 mb-8">
                        <Link to="/swiffix/">
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <div className="imageContainer"><Img fluid={data.imageThree.childImageSharp.fluid} /></div>
                        <div className=" md:mt-8 mt-4 max-w-xs leading-tight">
                                <h3 className="text-base md:text-xl">Swiffix</h3>
                                <small className="rdwn-work-details text-base md:text-xl text-gray-600">Middle East Movie streaming platform</small>
                        </div>
                        </animated.div>
                        </Link>
                    </li>

                    <li className="col-span-12 md:col-start-8 md:col-span-5 md:row-span-2 md:-mt-12 mb-12">
                        <Link to="/playground">
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <div className="imageContainer"><Img fluid={data.imageFour.childImageSharp.fluid} /></div>

                        <div className="md:mt-8 mt-4 max-w-xs leading-tight">
                                <h3 className="text-base md:text-xl">Playground</h3>
                                <small className="text-gray-600 text-base md:text-xl">Ideas, scraps and experiments</small>
                        </div>
                        </animated.div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}


export default Works