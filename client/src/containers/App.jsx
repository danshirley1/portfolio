import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import SpotifyProfilesContainer from './spotify/SpotifyProfiles';
import HomeContainer from './Home';
import AuthHub from './authentication/AuthHub';
import AuthSuccess from './authentication/AuthSuccess';
import SpotifyAuthenticatedContainer from './spotify/SpotifyAuthenticated';
import PageNotFound from './PageNotFound';
import isSpotifyAuthorized from '../utils/auth/spotify';

/* SEE: https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/react-router-4/auth.js */
/* Maybe I need to use loading, as per the above example, and/ or connectedAuthWrapper? */
const doSpotifyAuthenticatedCheck = connectedRouterRedirect({
  redirectPath: () => '/auth-hub',

  // Determine if the user is authenticated or not
  authenticatedSelector: state => isSpotifyAuthorized(state.spotifySession),

  // A nice display name for this check
  wrapperDisplayName: 'UserisSpotifyAuthorized',
});

export const App = () => (
  <div>
    <header>
      Header (todo - write a test for this in app.spec)
    </header>

    <main>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/auth-hub" component={AuthHub} />
        <Route path="/auth-success" component={AuthSuccess} />
        <Route path="/spotify-profiles" component={doSpotifyAuthenticatedCheck(SpotifyProfilesContainer)} />
        <Route
          path="/spotify-authentication-success/:accessToken/:refreshToken"
          component={SpotifyAuthenticatedContainer}
        />
        <Route component={PageNotFound} />
      </Switch>
    </main>

    <div>
      <a href="/">
        HOME &gt; (todo - write a test for this in app.spec)
      </a>
    </div>

    <div>
      <a href="/spotify-profiles">
        VIEW SPOTIFY PROFILES &gt; (todo - write a test for this in app.spec)
      </a>
    </div>
  </div>
);

export default withRouter(connect(state => ({
  spotifySession: state.spotifySession,
}))(App));
