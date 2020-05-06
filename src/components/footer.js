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
              <div className="foontNote_top col-span-10 md:col-span-5">
                <h4 className="tracking-tight md:text-2xl text-xl">Always happy to chat</h4>
                <small className="tracking-tight md:text-2xl text-xl text-gray-600">Inquiries about work, share ideas or just want to get to know me. I’m all ears.</small>
              </div>
            </div>
            <div  className="grid grid-cols-12 gap-4 md:mb-20">
                <ul className="flex rdwn-socials md:col-span-8 col-span-12 md:text-xl text-base flex-wrap">
                  <li className="md:mr-8 mr-4"><a href="mailto:rosanusi@gmail.com"  rel="noopener noreferrer" target="_blank">Email</a></li>
                  <li className="md:mr-8 mr-4"><a href="https://sidenote.ridwansanusi.com/"  rel="noopener noreferrer" target="_blank">Sidenote</a></li>
                  <li className="md:mr-8 mr-4"><a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Twitter</a></li>
                  <li className="md:mr-8 mr-4"><a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                  <li className="md:mr-8 mr-4"><a href="https://github.com/rosanusi?tab=repositories" rel="noopener noreferrer" target="_blank">Github</a></li>
                  <li className="md:mr-8 mr-4"><a href="https://dribbble.com/busolasanusi" rel="noopener noreferrer" target="_blank">Dribbble</a></li>
                  {/* <li><a href="https://open.spotify.com/user/rosanusi?si=Yzurq8VvQlq_mPCxwT83Sw" rel="noopener noreferrer" target="_blank">Spotify</a></li> */}
                  {/* <li><a href="https://www.instagram.com/busolasanusi/" rel="noopener noreferrer" target="_blank">Instagram</a></li> */}
              </ul>          
              <div className="copyright col-span-12 md:col-span-4 flex">
                <span className="text-base md:text-xl text-gray-600 md:ml-auto">&copy; 2014 - 2020 <span role="img" aria-label="peace-sign">✌️</span></span>
              </div>    
            </div>
          </div>
        </animated.footer>
    )
}


export default Footer