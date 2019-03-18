import React, { Component } from 'react'
import { Link } from 'gatsby'
import IcflixCover from '../images/works/icflix_cover.jpg';
import SwiffixCover from '../images/works/swiffix_cover.jpg';
import EnavigaCover from '../images/works/enaviga_cover.jpg';
// import NowplayrCover from '../images/works/nowplayr_cover.jpg';


export default class works extends Component {
  render() {
    return (
        <div className="rdwn-works">
            <h6 className="section-title">Some works —</h6>
    
            <ul className="rdwn-works-grid">
                <li>
                    <Link to="/icflix/">
                        <img src={IcflixCover} alt="" />
                    </Link>
                    <div className="details">
                        <span className="rdwn-work-title">icflix</span>
                        <span className="rdwn-work-details">Middle East Movie streaming platform</span>
                    </div>
                </li>
                <li>
                    <Link to="/swiffix/">
                        <img src={SwiffixCover} alt="" />
                    </Link>
                    <div className="details">
                        <span className="rdwn-work-title">Swiffix</span>
                        <span className="rdwn-work-details">Connecting people with verified professional handymen</span>
                    </div>                
                </li>        
                <li>
                    <Link to="/enaviga/">
                        <img src={EnavigaCover} alt="" />
                    </Link>
                    <div className="details">
                        <span className="rdwn-work-title">Enaviga</span>
                        <span className="rdwn-work-details">A Boat rental rlatform based in Belgium</span>
                    </div>
                </li>  
                {/* <li>
                    <Link to="/playground/">
                        <img src={NowplayrCover} alt="" />
                    </Link>
                    <div className="details">
                        <span className="rdwn-work-title">Playground</span>
                        <span className="rdwn-work-details">Random design ideas regularly updated</span>
                    </div>                    
                </li>             */}
            </ul>
    
        </div>  
    )
  }
}
