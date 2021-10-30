import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  // window.login = login
  // window.signup = signup
  // window.logout = logout

  ReactDOM.render(
    // <Root />,
    <h1>Hello there</h1>,
    root
  )
})