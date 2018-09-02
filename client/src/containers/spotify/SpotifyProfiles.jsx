/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React from 'react';
import { connect } from 'react-redux';

import SpotifyProfiles from '../../components/spotify/SpotifyProfiles';

function SpotifyProfilesContainer(props) {
  const { spotifySession } = props;
  const { visitingUser, myUser } = spotifySession;

  return (
    <SpotifyProfiles visitingUser={visitingUser} myUser={myUser} />
  );
}

export default connect(
  state => ({
    spotifySession: state.spotifySession,
  }),
  null,
)(SpotifyProfilesContainer);
