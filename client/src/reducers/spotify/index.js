import { REHYDRATE } from 'redux-persist';
import { SPOTIFY_TOKENS, SET_USER_ARTISTS } from '../../actions/spotify';
import { getAggregatedArtists, getTopAggregatedArtists } from '../../lib/tracks/track-aggregator';

const spotifyUserInitialState = {
  loading: false,
};

const initialState = {
  accessToken: null,
  refreshToken: null,
  visitingUser: Object.assign({}, spotifyUserInitialState),
  myUser: Object.assign({}, spotifyUserInitialState),
  userArtists: null,
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    // redux-persist rehydration occured
    case REHYDRATE:
      return state;

    case SPOTIFY_TOKENS: {
      const { accessToken, refreshToken } = action;
      return { ...state, accessToken, refreshToken };
    }

    case SET_USER_ARTISTS: {
      const { visitingSpotifyUserPlaylists, mySpotifyUserPlaylists } = action;

      const visitingUserArtists = getAggregatedArtists(visitingSpotifyUserPlaylists.flatMap(playlist => playlist.tracks));
      const myUserArtists = getAggregatedArtists(mySpotifyUserPlaylists.flatMap(playlist => playlist.tracks));

      const visitingUserTopArtists = getTopAggregatedArtists(visitingUserArtists, 5);
      const myUserTopArtists = getTopAggregatedArtists(myUserArtists, 5);

      return { ...state, userArtists: { visitingUserTopArtists, myUserTopArtists } };
    }

    default:
      return state;
  }
}
