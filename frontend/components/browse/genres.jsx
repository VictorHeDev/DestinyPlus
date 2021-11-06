import React, { Component } from 'react'

export default class Genres extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { genre, videos } = this.props
    return (
      <div className="genre-container">
        <p>{ genre }</p>
      </div>
    )
  }
}
