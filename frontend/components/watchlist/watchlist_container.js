import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { requestVideos } from '../../actions/video_actions';
import { requestWatchlistItems } from '../../actions/watchlist_actions';
import { selectWatchlistItems } from '../../reducers/selectors';

const mSTP = (state) => {
  const currentProfileId = state.session.currentProfile.id;
  const watchlists = state.entities.watchlists;
  const videos = state.entities.videos;
  const watchlistVideos = selectWatchlistItems(currentProfileId, watchlists, videos)
  return {
    watchlistVideos: watchlistVideos;
  };
};

const mDTP = (dispatch) => ({
  requestVideos: () => dispatch(requestVideos()),
  requestWatchlistItems: () => dispatch(requestWatchlistItems()),
});

export default withRouter(connect(mSTP, mDTP)(Watchlist));
