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
    return (
      <div>
        Hello there!
      </div>
    )
  }
}
