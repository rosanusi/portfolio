import React from 'react'
import {useSpring, animated} from 'react-spring'

const Footer = () => {

    const fadeFooter = useSpring({ 
      from: { opacity: 0},
      delay: 1400,
      opacity: 1,
      config: {duration : 500} 
    })

    return (
        <animated.footer className="md:my-48 my-16" style={fadeFooter}>
          <div className="container mx-auto px-8">
            <div className="footNote grid grid-cols-12 gap-4 md:mb-20 mb-10">
              <div className="foontNote_top col-span-10 md:col-span-3">
                <span>&copy; 2014 – 2021 Ridwan Sanusi. All rights reserved. </span>
              </div>
              <div className="foontNote_top col-span-10 md:col-start-6 md:col-span-6 px-12">                
                <span>Developed by me with GatsbyJS, Tailwind &amp; SCSS. Type set in Approach Regular by Emtype Foundry. Site deployed on Netflify via Github</span>
              </div>
            </div>
          </div>
        </animated.footer>
    )
}


export default Footer