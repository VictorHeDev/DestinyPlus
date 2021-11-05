import React, { Component } from 'react'

export default class Video extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { video } = this.props
    return (
      <div className="video-container">
        <p>{video.title}</p>
      </div>
    )
  }
}
