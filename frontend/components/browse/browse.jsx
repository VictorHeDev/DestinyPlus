import React, { Component } from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GenresContainer from './genres_container';
import MainCarousel from './MainCarousel';
export default class Browse extends Component {
  constructor(props) {
    super(props);
    // this.state = this.props
  }

  componentDidMount() {
    this.props.requestGenres();
    this.props.requestVideos();

    if (!this.props.currentProfile) {
      this.props.history.push('/profiles');
    }
  }

  render() {
    const { genres, videos } = this.props;

    return (
      <div className='browse-container'>
        <NavBarContainer />
        <div className='main-browse-content'>
          <MainCarousel />
          <GenresContainer genres={genres} videos={videos} />
        </div>
      </div>
    );
  }
}
