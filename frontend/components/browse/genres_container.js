// import { connect } from 'react-redux';
// import Genre from './genres';
// import { selectVideosFromGenre } from '../../reducers/selectors';

// // undefined value
// const mSTP = (state, ownProps) => {
//   const selectedVideos = selectVideosFromGenre(
//     state.entities.genres.videoIds,
//     state.entities.videos
//   );
//   return {
//     videos: selectedVideos,
//   };
// };

// const mDTP = (dispatch) => ({});

// export default connect(mSTP, mDTP)(Genre);

import { connect } from 'react-redux';
import Genres from './genres';

const mSTP = (state, ownProps) => {
  return {
    genres: Object.values(state.entities.genres),
  };
};

// const mDTP = dispatch => ({
//   requestGenres: () => dispatch(requestGenres())
// })

export default connect(mSTP, null)(Genres);
