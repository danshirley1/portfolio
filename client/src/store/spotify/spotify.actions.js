import { SpotifyActionTypes } from './spotify.types';

export function setTokens({ accessToken, refreshToken }) {
  return { type: SpotifyActionTypes.SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function authorizeSpotifyUser() {
  return { type: SpotifyActionTypes.AUTHORIZE_SPOTIFY_USER };
}

export function setUserArtists({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists }) {
  return { type: SpotifyActionTypes.SET_USER_ARTISTS, visitingSpotifyUserPlaylists, mySpotifyUserPlaylists };
}
