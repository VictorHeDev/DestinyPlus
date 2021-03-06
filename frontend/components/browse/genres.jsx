import React, { Component } from 'react';
import GenreContainer from './genre_container';
// fix the import later

const Genres = ({ genres, videos }) => {
  return (
    <div className='all-genres-container'>
      {genres.map((genre) => {
        return <GenreContainer key={genre.id} genre={genre} videos={videos} />;
      })}
    </div>
  );
};

export default Genres;

// export default class Genres extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { genres, videos } = this.props;

//     return (
//       <div className="all-genres-container">
//           {
//             genres.map(genre => {
//               return (
//                 <GenreContainer
//                   key={genre.id}
//                   genre={genre}
//                   videos={videos}
//                 />
//               )
//             })
//           }
//         </div>
//     );
//   }
// }
