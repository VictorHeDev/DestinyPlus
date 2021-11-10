import React, { Component } from 'react'
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom'
export default class VideoDescription extends Component {

  componentDidMount() {
    this.props.requestVideo(this.props.match.params.videoId)
  }

  render() {
    if (!this.props.video) return null
    const { title, description, year, runtime, mediatype, backgroundUrl } = this.props.video

    return (
      <div
        className="video-desc-container"
        style={{
          backgroundImage: `url(${backgroundUrl})`
        }}
      >
        <header>
          <NavBarContainer />
        </header>
        <div className="video-desc-main-content">
          {/* <img src={ backgroundUrl } alt="" /> */}
          {/* <h1>{ title }</h1> */}
          {/* <div className="video-description">
            <p>{ description }</p>
          </div> */}
          <div className="video-info" >
            <ul>
              <li>
                <p>
                  { description }
                </p>
              </li>
              <li>Year Released: { year }</li>
              <li>Total Runtime: { runtime }</li>
              <li>Type: { mediatype.toUpperCase() }</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
