import React, { Component } from 'react'
import { selectVideosFromGenre } from '../../reducers/selectors'
import Video from './video'

export default class Videos extends Component {
  render() {
    const { genre, videos } = this.props
    // debugger
    // this one does work
    const selectedVideos = selectVideosFromGenre(genre, videos)


    // this one does not work
    // const selectedVideos = selectVideosFromGenre(genre, this.state.entities.videos)

    return (
      <div className="genre-item">
        {selectedVideos.map((video, idx) => {
            return (
            <Video
              video={video}
              key={idx}
              genre={genre}
            />
        )})}
      </div>
    )
  }
}
