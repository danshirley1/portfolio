import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import { Grid, CssBaseline } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import MuiStylesheet from '../styles/mui-theme';
import SpotifyProfilesContainer from './spotify/SpotifyProfiles';
import SpotifyUserPlaylistsContainer from './spotify/SpotifyUserPlaylists';
import HomeContainer from './Home';
import AuthHub from './authentication/AuthHub';
import AuthSuccess from './authentication/AuthSuccess';
import SpotifyAuthenticatedContainer from './spotify/SpotifyAuthenticated';
// TODO import PageNotFound from './PageNotFound';
import isSpotifyAuthorized from '../utils/auth/spotify';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
  <MuiThemeProvider theme={MuiStylesheet}>
    <CssBaseline />

    {/* Header */}
    <Grid spacing={0} container>
      <Grid item xs>
        <Header />
      </Grid>
    </Grid>

    {/* Main content */}
    <Grid spacing={0} container alignItems="center">
      <Grid item xs alignItems="center">
        <main className="app-root-container">
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/auth-hub" component={AuthHub} />
            <Route path="/auth-success" component={AuthSuccess} />
            <Route path="/spotify-profiles" component={doSpotifyAuthenticatedCheck(SpotifyProfilesContainer)} />
            <Route path="/spotify-user-playlists" component={doSpotifyAuthenticatedCheck(SpotifyUserPlaylistsContainer)} />
            <Route
              path="/spotify-authentication-success/:accessToken/:refreshToken"
              component={SpotifyAuthenticatedContainer}
            />
            {/* TODO <Route component={PageNotFound} /> */}
          </Switch>
        </main>
      </Grid>
    </Grid>

    {/* Footer */}
    <Grid spacing={0} container>
      <Grid item xs>
        <Footer />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default withRouter(connect(state => ({
  spotifySession: state.spotifySession,
}))(App));
