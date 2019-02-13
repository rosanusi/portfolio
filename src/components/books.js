import React, { Component } from 'react'
import { Link } from 'gatsby'

import CultureCode from '../images/books/culturecode.jpg';
import LawsofHumanNature from '../images/books/lawsofhumannature.jpg';
import HowAsiaWorks from '../images/books/howasiaworks.jpg';

export default class books extends Component {
  render() {
    return (
      <div className="rdwn-books push-right">
        <h6 className="section-title">Commute Companions</h6>
        <small className="section-subtitle">Books I'm currently reading</small>

        <ul className="rdwn-books-grid">
          <li>
            <a href="https://www.goodreads.com/book/show/33517721-the-culture-code" target="_blank">
                <img src={CultureCode} alt="" />
            </a>
          </li>
          <li>
          <a href="https://www.goodreads.com/book/show/39330937-the-laws-of-human-nature" target="_blank">
                <img src={LawsofHumanNature} alt="" />
            </a>

          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/16144575-how-asia-works" target="_blank">
              <img src={HowAsiaWorks} alt="" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}