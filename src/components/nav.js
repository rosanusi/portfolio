import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class nav extends Component {
  render() {
    return (
    <div className={this.props.className}>
      
        <div className="rdwn-name">
          <h2 className="title"><Link to="/">Busola Sanusi</Link></h2>
          <small>A designer working on digital products</small>
        </div>
  
        <ul className="rdwn-socials">
          <li><a href="https://twitter.com/busolasanusi" target="_blank">twitter</a></li>
          <li><a href="https://open.spotify.com/user/rosanusi?si=Yzurq8VvQlq_mPCxwT83Sw" target="_blank">spotify</a></li>
          <li><a href="https://github.com/rosanusi" target="_blank">github</a></li>
          <li><a href="https://www.instagram.com/busolasanusi/" target="_blank">insta</a></li>
        </ul>
  
    </div>  
    )
  }
}
