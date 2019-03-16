import React, { Component } from 'react'

import Madvillian from '../images/music/madvillian.jpg';
import Portishead from '../images/music/portishead.jpg';
import Sweatshirt from '../images/music/sweatshirt.jpg';
import Wuntoo from '../images/music/wuntoo.jpg';


export default class music extends Component {


  render() {
    return (
      <div className="rdwn-music push-right">
        <h6 className="section-title">Headnodes</h6>
        <small className="section-subtitle">My most repeated songs in the last few days</small>

        <ul className="rdwn-music-grid">
          <li>
            <a href="https://open.spotify.com/album/67Yc6dfTWwuPceZRK7sluD" rel="noopener noreferrer" target="_blank">
                <img src={Madvillian} alt="" />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno" rel="noopener noreferrer" target="_blank">
              <img src={Portishead} alt="" />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/66at85wgO2pu5CccvqUF6i" rel="noopener noreferrer" target="_blank">
              <img src={Sweatshirt} alt="" />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/5MWhs2N3eO78ppIYmRUzmH" rel="noopener noreferrer" target="_blank">
              <img src={Wuntoo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
