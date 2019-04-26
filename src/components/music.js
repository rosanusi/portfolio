import React, { Component } from 'react'

import Madvillian from '../images/music/madvillian.jpg';
import Portishead from '../images/music/portishead.jpg';
import Sweatshirt from '../images/music/sweatshirt.jpg';
import Wuntoo from '../images/music/wuntoo.jpg';


export default class music extends Component {


  render() {
    return (
      <div className="rdwn-music">
        <h6 className="section-title">Headnodes</h6>
        <small className="section-subtitle">My most repeated songs in the last few days</small>

        <ul className="rdwn-music-grid">
          <li>
            <a href="https://open.spotify.com/album/67Yc6dfTWwuPceZRK7sluD" rel="noopener noreferrer" target="_blank">
                madvillian
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno" rel="noopener noreferrer" target="_blank">
              portishead
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/66at85wgO2pu5CccvqUF6i" rel="noopener noreferrer" target="_blank">
              sweatshirt
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/5MWhs2N3eO78ppIYmRUzmH" rel="noopener noreferrer" target="_blank">
              wuntoo
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
