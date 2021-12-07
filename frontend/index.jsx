import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import 'bootstrap/dist/css/bootstrap.min.css';

import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  // bootstrapping so store is not cleared after refresh
  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id,
        currentProfile: JSON.parse(localStorage.getItem('currentProfile'))
          .currentProfile,
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  store.subscribe(() => {
    localStorage.setItem(
      'currentProfile',
      JSON.stringify(store.getState()['session'])
    );
  });

  // window.login = login
  // window.signup = signup
  window.logout = logout;

  window.store = store;
  // store.dispatch(logout())

  ReactDOM.render(<Root store={store} />, root);
});

// add current profile to preloaded state using local storage
