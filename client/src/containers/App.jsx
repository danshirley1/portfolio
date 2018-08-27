import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import SpotifyProfilesContainer from './spotify/SpotifyProfiles';
import HomeContainer from './Home';
import SpotifyAuthenticate from '../components/spotify/SpotifyAuthenticate';
import SpotifyAuthenticatedContainer from '../containers/spotify/SpotifyAuthenticatedContainer';
import isSpotifyAuthenticated from '../utils/auth/spotify';

/* SEE: https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/react-router-4/auth.js */
/* Maybe I need to use loading, as per the above example, and/ or connectedAuthWrapper? */
const doSpotifyAuthenticatedCheck = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: () => '/do-spotify-authenticate',

  // Determine if the user is authenticated or not
  authenticatedSelector: state => isSpotifyAuthenticated(state.spotifySession),

  // A nice display name for this check
  wrapperDisplayName: 'UserIsSpotifyAuthenticated',
});

const App = () => (
  <div>
    <header>
      Header
    </header>

    <main>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/spotify-profiles" component={doSpotifyAuthenticatedCheck(SpotifyProfilesContainer)} />
      <Route path="/do-spotify-authenticate" component={SpotifyAuthenticate} />
      <Route
        path="/spotify-authentication-success/:accessToken/:refreshToken"
        component={SpotifyAuthenticatedContainer}
      />
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
