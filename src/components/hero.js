import React, { Component } from 'react';
import { Link } from 'gatsby'

class hero extends Component {
    render() {
        return (
            
            <div className="rdwn-grid-container">

                <div className="rdwn-main-section">

                    <div className="rdwn-bio_copy">
                        <p className="rdwn-bio_copy__main">My daily work revolves around improving people's 
                        interaction with digital products by applying principles, 
                        processes and methods that put humans at the centre of 
                        product development.</p>

                        <p className="rdwn-bio_copy__main">
                        Currently improving how people experience the world @ <a href="http://www.booking.com"  rel="noopener noreferrer" target="_blank">booking.com</a> in Amsterdam.
                        </p>


                        <div className="rdwn-bio-subsection">
                            <h2 className="rdwn-bio_copy__smalltitle">Selected past projects</h2>
                            <p className="rdwn-project-titles">
                                <Link to="/preferred">Program dashboard design</Link>, <Link to="/icflix">Smart TV app redesign</Link>, <Link to="/icflixvideo">Custom web video player revamp</Link>, <Link to="/enaviga">Partner platform for Boat rental service</Link>
                            </p>
                        </div>
                    </div>  
                </div>
            </div>  
        );
    }
}

export default hero;