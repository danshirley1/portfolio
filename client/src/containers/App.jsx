import React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';

import SpotifyProfilesContainer from './spotify/SpotifyProfiles';
import HomeContainer from './Home';
import SpotifyAuthenticatedContainer from './spotify/SpotifyAuthenticatedContainer';
import PageNotFoundContainer from './PageNotFound';
import isSpotifyAuthorized from '../utils/auth/spotify';

import { authorizeSpotifyUser } from '../actions/spotify';

/* SEE: https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/react-router-4/auth.js */
/* Maybe I need to use loading, as per the above example, and/ or connectedAuthWrapper? */
const doSpotifyAuthenticatedCheck = connectedReduxRedirect({
  // The url to redirect user to if they fail
  // redirectPath: () => '/do-spotify-authenticate',

  redirectPath: () => '/',

  redirectAction: authorizeSpotifyUser,

  // Determine if the user is authenticated or not
  authenticatedSelector: state => isSpotifyAuthorized(state.spotifySession),

  // A nice display name for this check
  wrapperDisplayName: 'UserisSpotifyAuthorized',
});

const App = () => (
  <div>
    <header>
      Header
    </header>

    <main>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/spotify-profiles" component={doSpotifyAuthenticatedCheck(SpotifyProfilesContainer)} />
        <Route
          path="/spotify-authentication-success/:accessToken/:refreshToken"
          component={SpotifyAuthenticatedContainer}
        />
        <Route component={PageNotFoundContainer} />
      </Switch>
    </main>

    <div>
      <a href="/">
        HOME &gt;
      </a>
    </div>

    <div>
      <a href="/spotify-profiles">
        VIEW SPOTIFY PROFILES &gt;
      </a>
    </div>
  </div>
);

export default connect(state => ({
  spotifySession: state.spotifySession,
}))(App);
