import { connect } from 'react-redux'
import Watchlist from './watchlist'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { requestVideos } from '../../actions/video_actions'
import { requestWatchlistItems } from '../../actions/watchlist_actions'


const mSTP = (state) => {
  const currentProfileId = state.session.currentProfile.id;
  const watchlistItems;
  return {

  }
}

const mDTP = dispatch => ({
  requestVideos: () => dispatch(requestVideos()),
  requestWatchlistItems: () => dispatch(requestWatchlistItems())
})

export default withRouter(connect(mSTP, mDTP)(Watchlist))