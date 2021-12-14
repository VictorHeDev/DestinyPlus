import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { receiveVideo, requestVideo } from '../../actions/video_actions';
import {
  createWatchlistItem,
  deleteWatchlistItem,
  requestWatchlistItems,
} from '../../actions/watchlist_actions';
import VideoDescription from './video_description';
import React from 'react';

const mSTP = (state, ownProps) => {
  return {
    video: state.entities.videos[ownProps.match.params.videoId],
    currentProfileId: state.session.currentProfile.id,
    watchlists: Object.values(state.entities.watchlists),
  };
};

const mDTP = (dispatch) => {
  return {
    requestVideo: (videoId) => dispatch(requestVideo(videoId)),
    createWatchlistItem: (watchlistItem) =>
      dispatch(createWatchlistItem(watchlistItem)),
    deleteWatchlistItem: (watchlistItemId) =>
      dispatch(deleteWatchlistItem(watchlistItemId)),
    requestWatchlistItems: () => dispatch(requestWatchlistItems()),
  };
};

export default connect(mSTP, mDTP)(VideoDescription);
