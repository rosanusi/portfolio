import React, { Component } from 'react';
import { Link } from 'gatsby'

class hero extends Component {
    render() {
        return (
            <div className="rdwn-bio_copy">
                <p>My daily work revolves around improving people's 
                interaction with digital products by applying principles, 
                processes and methods that put humans at the centre of 
                product development.</p>

                <p>
                <span className="highlight current">Currently</span>, improving how people experience the world at <a href="http://www.booking.com"  rel="noopener noreferrer" target="_blank">booking.com</a> in beautiful city of Amsterdam.
                </p>

                <p>
                <span className="highlight previous">Previously</span>, I spent some time working on a <Link to="/icflix/">movie streaming 
                platform</Link>, helped a startup work on their <Link to="/enaviga/">boat rental platform</Link> and 
                worked closely with another early stage start-up to design an app 
                that <Link to="/swiffix/">helps people find verified handymen</Link>. 
                </p>

                <p>
                I like to keep  <Link to="/links/">things I've recently read</Link> and sometimes <a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">tweet about music &amp; design</a>. Currently not available for freelance but always happy to have a great chat <a href="mailto:rosanusi@gmail.com" rel="noopener noreferrer" target="_blank">here</a>
                </p>
            </div>    
        );
    }
}

export default hero;