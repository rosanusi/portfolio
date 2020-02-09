import React, { Component } from 'react';
import { Link } from 'gatsby';
import Anime, {anime} from 'react-anime';
  


// Animation 

let heroCopyProps = {
    translateY : [4, 0],
    opacity : [0, 1],
    easing: 'easeInOutQuad',
    delay: 500
}

let linkProps = {
    opacity : [0, 1],
    easing: 'easeInOutQuad',
    // loop: true,
    delay: 700,
}

let worksProps = {
    opacity : [0, 1],
    easing: 'easeInOutQuad',
    // loop: true,
    delay: 1200,
}

class hero extends Component {


    render() {
        return (



            
            <div className="rdwn-grid-container">


                <p className="rdwn-bio_copy__main">
                    <Anime {...heroCopyProps}>
                        Delivering delightful experiences by using user-centered processes to solve meaningful challenges.
                    </Anime>
                </p>

                <p className="rdwn-bio_copy__sub">
                <Anime {...linkProps}>
                    <a href="/profile" className="rdwn-bio-link">
                        More about me
                    </a>
                    </Anime>

                </p>


                <div className="rdwn-bio-subsection">
                    <Anime {...worksProps}>
                    <h2 className="rdwn-bio_copy__smalltitle">Selected past projects</h2>
                    <ul className="rdwn-project-titles">
                        <li>
                            <Link to="/preferred">Program dashboard for Booking's exclusive partner program</Link>    
                        </li>
                        <li>
                            <Link to="/swiffix">An on-demand home service platform for Swiffix</Link>
                        </li>
                        <li>
                            <Link to="/icflix">Redesigning a movie streaming smart tv app</Link>
                        </li> 
                    </ul>
                    </Anime>
                </div>

            </div>  
        
        


        );
    }
}

export default hero;