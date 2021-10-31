import { connect } from 'react-redux';

import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  navLink: <Link to='/signup'>Sign Up instead</Link>,
});

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
