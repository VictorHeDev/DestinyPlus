import React, { Component } from 'react'

export default class VideoDescription extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // this.props.requestVideo(this.props.video)
    this.props.requestVideo(this.props.match.params.videoId)
  }

  render() {
    if (!this.props.video) return null
    const { title, description, year, runtime, mediatype } = this.props
    return (
      <div>
        Hello there!
        { this.props.video.title }
      </div>
    )
  }
}
