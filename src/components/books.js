import React, { Component } from 'react'

export default class books extends Component {
  render() {
    return (
      <div className="rdwn-books">

        <ul className="rdwn-books-grid">
          <li>
              <a href="https://www.goodreads.com/book/show/33517721-the-culture-code" rel="noopener noreferrer" target="_blank">
                Culture Code
              </a> - Daniel Coyle
          </li>
          <li>
              <a href="https://www.goodreads.com/book/show/39330937-the-laws-of-human-nature" rel="noopener noreferrer" target="_blank">
              Laws of Human Nature
              </a> - Robert Greene
          </li>
        </ul>
      </div>
    )
  }
}
