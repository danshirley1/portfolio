import { REHYDRATE } from 'redux-persist';
import { SpotifyActionTypes } from './spotify.types';
import { getAggregatedArtists, getTopAggregatedArtists } from '../../lib/tracks/track-aggregator';

const spotifyUserInitialState = {
  loading: false,
};

const initialState = {
  accessToken: null,
  refreshToken: null,
  visitingUser: { ...spotifyUserInitialState },
  myUser: { ...spotifyUserInitialState },
  userArtists: null,
};

export default function reduce(action, state = initialState) {
  switch (action.type) {
    // redux-persist rehydration occured
    case REHYDRATE:
      return state;

    case SpotifyActionTypes.SPOTIFY_TOKENS: {
      const { accessToken, refreshToken } = action;
      return { ...state, accessToken, refreshToken };
    }

    case SpotifyActionTypes.SET_USER_ARTISTS: {
      const { visitingSpotifyUserPlaylists, mySpotifyUserPlaylists } = action;

      const visitingUserArtists = getAggregatedArtists(visitingSpotifyUserPlaylists.flatMap((playlist) => playlist.tracks));
      const myUserArtists = getAggregatedArtists(mySpotifyUserPlaylists.flatMap((playlist) => playlist.tracks));

      const visitingUserTopArtists = getTopAggregatedArtists(visitingUserArtists, 5);
      const myUserTopArtists = getTopAggregatedArtists(myUserArtists, 5);

      return { ...state, userArtists: { visitingUserTopArtists, myUserTopArtists } };
    }

    default:
      return state;
  }
}
