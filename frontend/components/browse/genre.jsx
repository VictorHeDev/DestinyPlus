import React, { Component } from 'react'
import Videos from './videos'
// import Videos from './videos_container'
export default class Genre extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { genre, videos } = this.props

    return (
      <div className='genre-container'>
        <div className='genre-name'>
          <h3>{genre.name}</h3>
        </div>
        <div className='genre-item'>
          <Videos
            genre={genre}
            videos={videos}
          />
        </div>
      </div>
    )
  }
}
