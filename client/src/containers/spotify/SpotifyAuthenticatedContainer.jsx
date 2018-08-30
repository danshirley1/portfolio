import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  setTokens,
  navigateAuthorizedUserToSpotifyProfilesView,
} from '../../actions/spotify/';

class SpotifyAuthenticated extends Component {
  componentDidMount() {
    const { match, setTokens } = this.props;
    const { accessToken, refreshToken } = match.params;

    setTokens({ accessToken, refreshToken });
  }

  render() {
    return <Redirect to="/spotify-profiles" />;
  }
}

const mapStateToProps = state => ({
  spotifySession: state.spotifySession,
});

export default connect(
  mapStateToProps,
  {
    setTokens,
    navigateAuthorizedUserToSpotifyProfilesView,
  },
)(SpotifyAuthenticated);
