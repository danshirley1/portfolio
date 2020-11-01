/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React from 'react';
import { connect } from 'react-redux';

import SpotifyProfilesView from '../../components/spotify/SpotifyProfiles';

import { setUserArtists } from '../../actions/spotify';

export function SpotifyProfiles(props) {
  const {
    spotifySession,
    onSetUserArtists,
  } = props;
  const {
    accessToken,
    userArtists,
  } = spotifySession;

  const doProfilesDataLoaded = ({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists }) => {
    if (!userArtists) onSetUserArtists({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists });
  };

  return (
    <SpotifyProfilesView
      accessToken={accessToken}
      userArtists={userArtists}
      doProfilesDataLoaded={doProfilesDataLoaded}
    />
  );
}

export default connect(
  (state) => ({
    spotifySession: state.spotifySession,
  }),
  { onSetUserArtists: setUserArtists },
)(SpotifyProfiles);
