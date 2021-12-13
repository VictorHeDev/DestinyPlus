import { connect } from 'react-redux';
import { requestGenres } from '../../actions/genre_actions';
import { requestVideo, requestVideos } from '../../actions/video_actions';
import Browse from './browse';
import { withRouter } from 'react-router';
import { requestWatchlistItems } from '../../actions/watchlist_actions';
const mSTP = (state, ownProps) => {
  return {
    genres: Object.values(state.entities.genres),
    videos: state.entities.videos,
    currentProfile: state.session.currentProfile,
  };
};

const mDTP = (dispatch) => ({
  requestGenres: () => dispatch(requestGenres()),
  requestGenre: (genreId) => dispatch(requestGenre(genreId)),
  requestVideos: () => dispatch(requestVideos()),
  requestVideo: (videoId) => dispatch(requestVideo(videoId)),
  requestWatchlistItems: () => dispatch(requestWatchlistItems()),
});

export default withRouter(connect(mSTP, mDTP)(Browse));
