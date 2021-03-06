import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import NavBarContainer from './navbar/navbar_container'

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Splash from './splash/splash';
import Footer from './footer/footer';
import ProfilesContainer from './profiles/select_profiles_container';
import EditProfilesContainer from './profiles/edit_profiles_container';
import EditProfileFormContainer from './profiles/edit_profile_form_container';
import CreateProfileFormContainer from './profiles/create_profile_form_container';
import BrowseContainer from './browse/browse_container';
import VideoDescriptionContainer from './video_description/video_description_container';
import SeriesContainer from './series/series_container';
import MoviesContainer from './movies/movies_container';
import WatchlistContainer from './watchlist/watchlist_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div className='app-container'>
    <header>{/* <NavBarContainer /> */}</header>

    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/profiles' component={ProfilesContainer} />
      <ProtectedRoute
        exact
        path='/profiles/edit'
        component={EditProfilesContainer}
      />
      <ProtectedRoute
        path='/profiles/:profileId/edit'
        component={EditProfileFormContainer}
      />
      <ProtectedRoute
        path='/profiles/new'
        component={CreateProfileFormContainer}
      />
      <ProtectedRoute
        path='/profiles/new'
        component={CreateProfileFormContainer}
      />
      <ProtectedRoute exact path='/browse' component={BrowseContainer} />
      <ProtectedRoute
        path='/browse/:videoId'
        component={VideoDescriptionContainer}
      />
      <ProtectedRoute exact path='/series' component={SeriesContainer} />
      <ProtectedRoute exact path='/movies' component={MoviesContainer} />
      <ProtectedRoute exact path='/watchlist' component={WatchlistContainer} />
      <ProtectedRoute exact path='/search' component={SearchContainer} />
    </Switch>

    {/* <ProtectedRoute exact path="/browse" /> */}

    <Footer />
  </div>
);

export default App;
