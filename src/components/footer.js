import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
        <footer>

          <h6 className="section-title">Socials</h6>
          
          <ul className="rdwn-socials">
            <li><a href="https://twitter.com/busolasanusi" rel="noopener noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://dribbble.com/busolasanusi" rel="noopener noreferrer" target="_blank">Dribbble</a></li>
            <li><a href="https://open.spotify.com/user/rosanusi?si=Yzurq8VvQlq_mPCxwT83Sw" rel="noopener noreferrer" target="_blank">Spotify</a></li>
            <li><a href="https://www.instagram.com/busolasanusi/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
          </ul>

          {/* <span className="copyright">Copyright, 2019.</span> */}

        </footer>
    )
  }
}
