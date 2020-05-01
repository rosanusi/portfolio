import React from 'react';
import {useSpring, animated} from 'react-spring'

const Hero = () => {

    const fadeHero = useSpring({ 
        from: { opacity: 0},
        delay: 600,
        opacity: 1,
        config: {duration : 500} 
      })    


    return (
        

        <animated.div  className="my-24 md:my-48" style={fadeHero} >
            <div className="container grid grid-cols-12 gap-4 mx-auto px-8">
                <h2 className="col-start-1 col-span-12 md:col-start-4 md:col-span-8 tracking-tight text-2xl md:text-4xl">
                I'm a product designer with keen interest in giving form to complex ideas. Currently at booking.com, designing delightful experiences using human-centered process to solve meaningful challenges. <a href="/profile" className="">Get to know me</a>
                </h2>
            </div>
        </animated.div>  

    )
}

export default Hero;