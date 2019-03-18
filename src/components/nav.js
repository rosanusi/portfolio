import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class nav extends Component {
  render() {
    return (
    <div className="rdwn-header_floated">
      
        <div className="rdwn-name">
          <h2 className="title"><Link to="/">Busola Sanusi</Link> <span>— Digital Product Designer</span></h2>
          <small>Currently working amongst awesome folks at <Link to="">booking.com</Link> to help improve how people experience the world.</small>
        </div>
{/*   
        <ul className="rdwn-nav">
          <li><a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Journal</a></li>
          <li><a href="https://open.spotify.com/user/rosanusi?si=Yzurq8VvQlq_mPCxwT83Sw" rel="noopener noreferrer" target="_blank">Contact me</a></li>
        </ul> */}

    </div>  
    )
  }
}
