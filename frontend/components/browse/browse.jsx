import React, { Component } from 'react'
import NavBarContainer from '../navbar/navbar_container'
import GenresContainer from './genres_container'
export default class Browse extends Component {
  constructor(props) {
    super(props)
    // this.state = this.props
  }

  componentDidMount() {
    this.props.requestGenres()
    this.props.requestVideos()
  }

  render() {
    const { genres, videos } = this.props
    
    return (
      <div className="browse-container">
        <header>
          <NavBarContainer />
        </header>
        {/* <Carousel /> */}

        <GenresContainer
          genres={genres}
          videos={videos}
        />

      </div>
    )
  }
}