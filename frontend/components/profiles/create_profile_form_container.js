import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile_actions';
import CreateProfileForm from './create_profile';
import React from 'react';

const mSTP = (state, ownProps) => {
  return {
    profile: {
      name: '',
    },
    formType: 'Create Profile',
  };
};

const mDTP = (dispatch) => {
  return {
    action: (profile) => dispatch(createProfile(profile)),
  };
};

export default connect(mSTP, mDTP)(CreateProfileForm);
