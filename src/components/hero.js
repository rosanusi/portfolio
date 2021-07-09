import React from 'react';
import {useSpring, animated} from 'react-spring'
import Logo from '../images/rdwn-icon.svg'

const Hero = () => {

    const fadeHero = useSpring({ 
        from: { opacity: 0},
        delay: 600,
        opacity: 1,
        config: {duration : 500} 
      })    


    return (
        

        <animated.div  className="my-24 md:my-48" style={fadeHero} >
            <div className="container grid grid-cols-12 gap-4 mx-auto px-9">
                <div className="col-start-1  col-span-3  logo">
                    <img src={Logo} alt="Ridwan Snausi's Mark" />
                </div>
                <div className="col-start-1 col-span-12 md:col-start-6 md:col-span-6 px-12 hero-copy">
                    <p className="main">
                    I'm Ridwan Sanusi, a product and experience designer currently living in Berlin. Solving meaningful retail challenges at Amazon.
                    </p>
                    <p>
                    Previously designed for travel at Booking.com. As a designer whose primary medium is the web, my approach to the design process is holistic. I believe crafting great experiences includes understanding the materials used in building them.
                    </p>
                    <p>
                    Outside of work, I spend time starting and abandoning side projects. Other times I'm fiddling with my drum machine, flipping old records to make beats. 
                    </p>
                    <p>
                    I'm usually updating my journal. You can also find me on <a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Twitter</a>, <a href="https://www.instagram.com/busolasanusi/" rel="noopener noreferrer" target="_blank">Instagram</a>, and <a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Linkedin</a>.
                    </p>
                </div>
            </div>
        </animated.div>  

    )
}

export default Hero;