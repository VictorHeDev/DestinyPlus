import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  requestProfile,
  updateProfile,
  deleteProfile,
} from '../../actions/profile_actions';
import EditProfileForm from './edit_profiles_form';

const mSTP = (state, ownProps) => {
  return {
    profile: state.entities.profiles[ownProps.match.params.profileId],
    // profile: state.entities.profiles.id,
    formType: 'Update Profile',
  };
};

const mDTP = (dispatch) => {
  return {
    action: (profile) => dispatch(updateProfile(profile)),
    requestProfile: (profileId) => dispatch(requestProfile(profileId)),
    deleteProfile: (profileId) => dispatch(deleteProfile(profileId)),
  };
};

export default connect(mSTP, mDTP)(EditProfileForm);
