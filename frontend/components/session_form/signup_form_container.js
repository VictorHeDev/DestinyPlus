import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  navLink: <Link to='/login'>Login instead</Link>,
});

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
