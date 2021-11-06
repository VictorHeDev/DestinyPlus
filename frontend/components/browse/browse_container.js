import { connect } from 'react-redux';
import { requestGenres } from '../../actions/genre_actions';
import { requestVideo, requestVideos } from '../../actions/video_actions';
import Browse from './browse';

const mSTP = (state, ownProps) => {
  return {
    genres: Object.values(state.entities.genres),
    videos: state.entities.videos,
  };
};

const mDTP = (dispatch) => ({
  requestGenres: () => dispatch(requestGenres()),
  requestGenre: (genreId) => dispatch(requestGenre(genreId)),
  requestVideos: () => dispatch(requestVideos()),
  requestVideo: (videoId) => dispatch(requestVideo(videoId)),
});

export default connect(mSTP, mDTP)(Browse);
