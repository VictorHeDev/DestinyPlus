import React, { Component } from 'react'
// import Videos from './videos'
import VideosContainer from './videos_container'
export default class Genre extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { genre, videos } = this.props

    return (
      < div className='genre-container'>
        <div className='genre-name'>
          <h5>{genre.name}</h5>
        </div>
        <VideosContainer
          genre={genre}
          videos={videos}
        />
      </div>
    )
  }
}
