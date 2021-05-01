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
            <div className="container grid grid-cols-12 gap-4 mx-auto px-9">
                {/* <h2 className="col-start-1 col-span-12 md:col-start-3 md:col-span-9">
                Ridwan is a product &amp; experience designer with keen interest in giving delightful forms to complex ideas. Currently living in Berlin solving meaningful retail challenges at Amazon. <a href="/profile" className="">More about me</a>
                </h2> */}
                <h2 className="col-start-1 col-span-12 md:col-start-4 md:col-span-7">
                <a href="/profile" className="">Ridwan</a> is a product &amp; experience designer. Currently living in Berlin solving meaningful retail challenges at Amazon.
                </h2>
            </div>
        </animated.div>  

    )
}

export default Hero;