/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React from 'react';
import { connect } from 'react-redux';

import SpotifyProfilesView from '../../components/spotify/SpotifyProfiles';
import { setUserArtists } from '../../store/spotify/spotify.actions';

interface SpotifyUserPlaylist {
  foo: string,
}; // TODO move out in to a library

interface UserArtist {}; // TODO move out in to a library

interface SpotifySession {
  accessToken: string,
  userArtists: UserArtist[],
}; // TODO move out in to a library

interface Props {
  spotifySession: SpotifySession,
  onSetUserArtists: (val: { visitingSpotifyUserPlaylists: SpotifyUserPlaylist[], mySpotifyUserPlaylists: SpotifyUserPlaylist[] }) => void,
};

interface State {
  spotifySession: SpotifySession,
}

export function SpotifyProfiles(props: Props) {
  const {
    spotifySession,
    onSetUserArtists,
  } = props;

  const {
    accessToken,
    userArtists,
  } = spotifySession;

  const doProfilesDataLoaded = ({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists }: { visitingSpotifyUserPlaylists: SpotifyUserPlaylist[], mySpotifyUserPlaylists: SpotifyUserPlaylist[] }): void => {
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
  (state: State) => ({
    spotifySession: state.spotifySession,
  }),
  { onSetUserArtists: setUserArtists },
)(SpotifyProfiles);
