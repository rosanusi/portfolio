import React, { Component } from 'react';
import { Link } from 'gatsby';


class hero extends Component {

    render() {
        return (
            
            <div className="rdwn-grid-container">


                {/* <h1 className="rdwn-bio_copy__name">Hey. I'm Ridwan.</h1> */}

                <p className="rdwn-bio_copy__main">Delivering delightful digital experiences by using user-centered processes to solve meaningful challenges.</p>

                <p className="rdwn-bio_copy__sub">
                    
                    {/* Currently helping to improve how people experience the world at <a href="http://www.booking.com"  rel="noopener noreferrer" target="_blank">booking.com</a> in Amsterdam. In my spare time, I collect <a href="https://ridsnote.blot.im/"  rel="noopener noreferrer" target="_blank">notes on design</a>, play with javascript through <a href="https://github.com/rosanusi?tab=repositories" rel="noopener noreferrer" target="_blank">side projects</a> and make beats on my Maschine MKII.  */}
                    
                    <a href="/profile" className="rdwn-bio-link">More about me</a>
                    
                    </p>


                <div className="rdwn-bio-subsection">
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
                </div>
            </div>  


        );
    }
}

export default hero;