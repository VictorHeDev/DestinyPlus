import React, { Component } from 'react'

export default class Video extends Component {
  constructor(props) {
    super(props)

  }

  handleRerouteOnClick() {
    const { video } = this.props
    // debugger
    this.props.history.push(`/browse/${video.id}`)
  }

  render() {
    const { video, reroute } = this.props

    if (video) {
      // debugger
      return (
        <div
        onClick={ () => this.handleRerouteOnClick() }
        className="video-container"
        >
          {/* <p>{video.title}</p> */}
          <img src={video.thumbnailUrl} alt="video thumbnail" />
        </div>
      )
    } else {
      return null
    }
  }
}
