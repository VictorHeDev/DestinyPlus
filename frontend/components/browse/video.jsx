import React, { Component } from 'react'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  handleVideoClick(e) {
    const { video } = this.props
    // debugger

    e.preventDefault()
    this.props.history.push(`/browse/${video.id}`)
  }

  render() {

    const { video } = this.props

    if (video) {
      return (
        <div
        onClick={ (e) => this.handleVideoClick(e) }
        className="video-container"
        >
          <p>{video.title}</p>
          {/* <img src={video.thumbnailUrl} alt="video thumbnail" /> */}
        </div>
      )
    } else {
      return null
    }
  }
}
