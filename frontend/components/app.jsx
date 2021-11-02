import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NavBarContainer from './navbar/navbar'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import Splash from './splash/splash'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Welcome to Destiny+</h1>
      </Link>
      <NavBarContainer />
    </header>


    <Splash />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    {/* <ProtectedRoute exact path="/browse" /> */}
    {/* <Route exact path="/" component={NavBarContainer} /> */}



  </div>
)

// decide on whether we want redirect to splash greeting or not

export default App