import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setTokens } from '../../actions/spotify/';

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

export default connect(
  state => ({
    spotifySession: state.spotifySession,
  }),
  { setTokens },
)(SpotifyAuthenticated);
