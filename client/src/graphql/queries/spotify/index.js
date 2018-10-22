import {
  SPOTIFY_USER,
  SPOTIFY_PLAYLIST,
} from './fragments';

export const GET_SPOTIFY_PROFILES_USER_DATA = `
  query ($accessToken: String!) {
    visitingSpotifyUser(accessToken: $accessToken) {
      ${SPOTIFY_USER}
    }
    mySpotifyUser {
      ${SPOTIFY_USER}
    }
    visitingSpotifyUserPlaylists(accessToken: $accessToken) {
      ${SPOTIFY_PLAYLIST}
    }
  }
`;

export { GET_SPOTIFY_PROFILES_USER_DATA as default };
