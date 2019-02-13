import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class github extends Component {
  render() {
    return (
        <div className="rdwn-github push-right">
        
            <h6 className="section-title">Active side projects</h6>
            <small className="section-subtitle">Learning Javascript by writing bad code</small>
    
            <ul className="rdwn-github-projects">
                <li>
                    <a href="https://github.com/rosanusi/project_journal">Project Journal</a>
                    <p>Putting Kanban &amp; note taking features together in one place.</p>
                </li>
                <li>
                    <a href="https://github.com/rosanusi/notes">Notes App</a>
                    <p>Dead simple note taking chrome extension made in reactjs</p>
                </li>
                <li>
                    <a href="https://github.com/rosanusi/watchbox">Watchbox</a>
                    <p>Simple react app to search for movies to watch</p>
                </li>
            </ul>
    
    
        </div>
  
    )
  }
}
