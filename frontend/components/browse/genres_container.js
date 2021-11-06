import React, { Component } from 'react';
import Video from './video';
// fix the import later

export default class Genres extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { genre, videos } = this.props;
    return (
      <div className='genre-container'>
        <div class='genre-name'>
          <h3>{genre.name}</h3>
        </div>
        <div className='genre-item'>
          {videos.map((video, idx) => {
            return <Video video={video} key={idx} />;
          })}
        </div>
      </div>
    );
  }
}
