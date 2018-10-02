import SPOTIFY_USER from './fragments';

export const GET_VISITING_AND_MY_SPOTIFY_USER = `
  query ($accessToken: String!) {
    visitingSpotifyUser(accessToken: $accessToken) {
      ${SPOTIFY_USER}
    }
    mySpotifyUser {
      ${SPOTIFY_USER}
    }
  }
`;

export { GET_VISITING_AND_MY_SPOTIFY_USER as default };
