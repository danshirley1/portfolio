export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_USER_BEGIN = 'SPOTIFY_USER_BEGIN';
export const SPOTIFY_USER_SUCCESS = 'SPOTIFY_USER_SUCCESS';
export const SPOTIFY_USER_FAILURE = 'SPOTIFY_USER_FAILURE';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const AUTHORIZE_SPOTIFY_USER = 'AUTHORIZE_SPOTIFY_USER';
export const SET_USER_ARTISTS = 'SET_USER_ARTISTS';

export function setTokens({ accessToken, refreshToken }) {
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function authorizeSpotifyUser() {
  return { type: AUTHORIZE_SPOTIFY_USER };
}

export function setUserArtists({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists }) {
  return { type: SET_USER_ARTISTS, visitingSpotifyUserPlaylists, mySpotifyUserPlaylists };
}
