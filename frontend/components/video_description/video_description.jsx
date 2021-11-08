import React, { Component } from 'react'
import NavBarContainer from '../navbar/navbar_container'

export default class VideoDescription extends Component {

  componentDidMount() {
    this.props.requestVideo(this.props.match.params.videoId)
  }

  render() {
    if (!this.props.video) return null
    const { title, description, year, runtime, mediatype } = this.props.video

    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <h1>{ title }</h1>
        <div className="video-description">
          <p>{ description }</p>
        </div>
        <div className="video-info" >
          <div>
            Year Released: { year }
          </div>
          <div>
            Total Runtime: { runtime }
          </div>
          <div>
            Type: { mediatype.toUpperCase() }
          </div>
        </div>
      </div>
    )
  }
}
