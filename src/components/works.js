import React, { Component } from 'react'
import { Link } from 'gatsby'
import IcflixCover from '../images/works/work-icflix-cover.jpg';
import EnavigaCover from '../images/works/work-icflix-cover.jpg';


export default class works extends Component {
  render() {
    return (
        <div className="rdwn-works">    
            <ul className="rdwn-works-grid">
                <li>
                    <Link to="/icflix/">
                        <img src={IcflixCover} alt="" />
                    </Link>
                    <div  className="details">
                        <span className="rdwn-work-title">icflix.com</span>
                        <span className="rdwn-work-details">Middle East Movie streaming platform</span>
                    </div>
                </li>
                <li>
                    <Link to="/enaviga/">
                        <img src={EnavigaCover} alt="" />
                    </Link>
                    <div  className="details">
                        <span className="rdwn-work-title">Enaviga.com</span>
                        <span className="rdwn-work-details">Middle East Movie streaming platform</span>
                    </div>
                </li>
                <li>
                    <Link to="/swiffix/">
                        <img src={EnavigaCover} alt="" />
                    </Link>
                    <div  className="details">
                        <span className="rdwn-work-title">swiffix.com</span>
                        <span className="rdwn-work-details">Middle East Movie streaming platform</span>
                    </div>
                </li>
            </ul>
        </div>  
    )
  }
}