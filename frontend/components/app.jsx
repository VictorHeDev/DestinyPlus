import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <h1>Welcome to Destiny+</h1>
      {/* <GreetingContainer /> */}
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
)

// decide on whether we want redirect to spash greeting or not

export default App