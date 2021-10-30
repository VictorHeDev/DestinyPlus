import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Welcome to Destiny+</h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    {/* <ProtectedRoute exact path="/browse" /> */}

    {/* {/* <Route exact path="/" component={GreetingContainer} /> */}
    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />  */}
  </div>
)

// decide on whether we want redirect to splash greeting or not

export default App