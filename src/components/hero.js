import React, { Component } from 'react';
import { Link } from 'gatsby';


class hero extends Component {

    render() {
        return (
            
            <div className="rdwn-grid-container">


                {/* <h1 className="rdwn-bio_copy__name">Hey. I'm Ridwan.</h1> */}

                <p className="rdwn-bio_copy__main">My work revolves around helping teams deliver delightful digital experiences by using user-centered design processes to solve meaningful challenges.</p>

                <p className="rdwn-bio_copy__sub">Currently helping to improve how people experience the world at <a href="http://www.booking.com"  rel="noopener noreferrer" target="_blank">booking.com</a> in Amsterdam. In my spare time, I collect <a href="https://ridsnote.blot.im/"  rel="noopener noreferrer" target="_blank">notes on design</a>, play with javascript through <a href="https://github.com/rosanusi?tab=repositories" rel="noopener noreferrer" target="_blank">side projects</a> and make beats on my Maschine MKII. <a href="/profile" className="rdwn-bio-link">More about me</a></p>


                <div className="rdwn-bio-subsection">
                    <h2 className="rdwn-bio_copy__smalltitle">Selected past projects</h2>
                    <p className="rdwn-project-titles">
                        <Link to="/preferred">Product Dashboard for Booking.com</Link>, <Link to="/icflix">icflix Smart TV</Link>, <Link to="/swiffix">Swiffix Mobile App</Link>
                    </p>
                </div>
            </div>  


        );
    }
}

export default hero;




{/* <span className="divider">⨯</span>  <Link to="/icflixvideo">Custom web video player revamp</Link> <span className="divider">⨯</span> <Link to="/enaviga">Partner platform for Boat rental service</Link>  */}