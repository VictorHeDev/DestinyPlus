import React, { Component } from 'react'
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
// import VideoPlayer from './video_player'
export default class VideoDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true
    }

    this.handleClickPlay = this.handleClickPlay.bind(this)
  }

  componentDidMount() {
    this.props.requestVideo(this.props.match.params.videoId)
  }

  handleClickPlay(e) {
    e.preventDefault()
    const myVideo = document.getElementById("myvideo")
    myVideo.requestFullscreen().then(() => myVideo.classList.remove("hidden")).then(() => myVideo.play())
  }

  render() {
    if (!this.props.video) return null
    const { title, description, year, runtime, mediatype, backgroundUrl, fileUrl } = this.props.video

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

        <video
          src={ fileUrl }
          controls
          width="100%"
          type="video/mp4"
          className="hidden"
          id="myvideo"
        >
        </video>

        <div className="video-desc-main-content">
          <div className="video-info" >
            <div className="video-desc-buttons">
              <button onClick={ (e) => this.handleClickPlay(e) }>PLAY</button>
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

document.addEventListener("fullscreenchange", e => {
  const myvideo = document.getElementById("myvideo")
  if (!document.fullscreenElement) {
    // document.exitFullscreen().catch((err) => Promise.resolve(err))
    document.exitFullscreen().catch(() => myvideo.pause())
    myvideo.classList.add("hidden")
  }
})