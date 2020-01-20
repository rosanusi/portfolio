import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
        <footer className="mainFooter">
          
          <ul className="rdwn-socials">
          <li><a href="https://sidenote.ridwansanusi.com/"  rel="noopener noreferrer" target="_blank">Design Sidenotes</a></li>
            <li><a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/busolarsanusi/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
            <li><a href="https://github.com/rosanusi?tab=repositories" rel="noopener noreferrer" target="_blank">Github</a></li>
            <li><a href="https://dribbble.com/busolasanusi" rel="noopener noreferrer" target="_blank">Dribbble</a></li>
            {/* <li><a href="https://open.spotify.com/user/rosanusi?si=Yzurq8VvQlq_mPCxwT83Sw" rel="noopener noreferrer" target="_blank">Spotify</a></li> */}
            {/* <li><a href="https://www.instagram.com/busolasanusi/" rel="noopener noreferrer" target="_blank">Instagram</a></li> */}
          </ul>

          <span className="copyright">Copyright, 2020</span>

        </footer>
    )
  }
}
