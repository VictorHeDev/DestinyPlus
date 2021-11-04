import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom;';
import { createProfile } from '../../actions/profile_actions';
import ProfileForm from './profile_form';
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

export default connect(mSTP, mDTP)(ProfileForm);
