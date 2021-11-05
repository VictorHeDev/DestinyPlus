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
      <div className="genre-container">
        <h3>{genre.name}</h3>
        {videos.map((video) => {
          return <Video video={video} />;
        })}
      </div>
    );
  }
}
