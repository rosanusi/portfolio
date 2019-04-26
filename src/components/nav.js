import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class nav extends Component {
  render() {
    return (
    <div className="rdwn-header_floated">
      
        <div className="rdwn-name">
          <h1 className="title push-right"><Link to="/">Busola Sanusi</Link> <span>— Digital Product Designer</span></h1>
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
