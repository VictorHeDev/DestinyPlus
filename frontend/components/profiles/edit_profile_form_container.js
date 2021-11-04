import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { requestProfile, updateProfile } from '../../actions/profile_actions';

export default class EditProfileForm extends Component {

  componentDidMount() {
    this.props.requestProfile(this.props.match.params.profileId)
  }

  render() {
    return <div></div>;
  }
}
