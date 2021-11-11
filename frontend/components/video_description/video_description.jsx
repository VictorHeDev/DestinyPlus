import React, { Component } from 'react'
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
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
        <div className="video-desc-gradient">

        </div>
        <header>
          <NavBarContainer />
        </header>
        <div className="video-desc-main-content">
          <div className="video-info" >
            <div className="video-desc-buttons">
              <button>PLAY</button>
              <FontAwesomeIcon className="plus-icon" icon={ faPlusCircle } size="3x"/>
            </div>
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
