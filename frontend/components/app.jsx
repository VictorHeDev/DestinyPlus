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
import NavBarContainer from './navbar/navbar_container'

import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import Splash from './splash/splash'
import Footer from './footer/footer';
import ProfilesContainer from './profiles/profiles_container'

const App = () => (
  <div>
      {/* <Link to="/" className="header-link">
        <h1>Welcome to Destiny+</h1>
      </Link> */}
    <header>
      {/* <NavBarContainer /> */}
    </header>
    {/* <Splash /> */}
    {/* look into switch statement */}
    {/* moved NavBarContainer into Splash */}

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/profiles" component={ ProfilesContainer }/>
    </Switch>

    {/* <ProtectedRoute exact path="/browse" /> */}

    <Footer />
  </div>
)

// decide on whether we want redirect to splash greeting or not

export default App