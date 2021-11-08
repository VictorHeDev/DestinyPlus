import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { receiveVideo, requestVideo } from '../../actions/video_actions';
import VideoDescription from './video_description';
import React from 'react';

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    video: state.entities.videos[ownProps.match.params.videoId],
  };
};

const mDTP = (dispatch) => {
  return {
    requestVideo: (videoId) => dispatch(requestVideo(videoId)),
  };
};

export default connect(mSTP, mDTP)(VideoDescription);
