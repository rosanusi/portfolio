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
                <h2 className="col-start-1 col-span-12 md:col-start-3 md:col-span-9 tracking-tight text-2xl md:text-3xl">
                Ridwan is a product &amp; experience designer with keen interest in giving delightful forms to complex ideas. Currently living in Berlin solving meaningful retail challenges at Amazon. <a href="/profile" className="">Get to know me</a>
                </h2>
            </div>
        </animated.div>  

    )
}

export default Hero;