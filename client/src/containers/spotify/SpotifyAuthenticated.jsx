import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setTokens } from '../../actions/spotify';

export class SpotifyAuthenticated extends Component {
  componentDidMount() {
    const { match, onSetTokens } = this.props;
    const { accessToken, refreshToken } = match.params;

    onSetTokens({ accessToken, refreshToken });
  }

  render() {
    return <Redirect to="/auth-success" />;
  }
}

export default connect(
  state => ({
    spotifySession: state.spotifySession,
  }),
  { onSetTokens: setTokens },
)(SpotifyAuthenticated);
