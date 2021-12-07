import React, { Component } from 'react';
import VideosContainer from './videos_container';

const Genre = ({ genre, videos }) => {
  return (
    <div className='genre-container'>
      <h5>{genre.name}</h5>

      <VideosContainer genre={genre} videos={videos} />
    </div>
  );
};

export default Genre;

// export default class Genre extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { genre, videos } = this.props

//     return (
//       < div className='genre-container'>
//         <h5>{genre.name}</h5>

//         <VideosContainer
//           genre={genre}
//           videos={videos}
//         />
//       </div>
//     )
//   }
// }
