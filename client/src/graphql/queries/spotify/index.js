import { VISITING_SPOTIFY_USER, MY_SPOTIFY_USER } from '../../schema/spotify';

export const GET_VISITING_AND_MY_SPOTIFY_USER = `
  query ($accessToken: String!) {
    ${VISITING_SPOTIFY_USER}
    ${MY_SPOTIFY_USER}
  }
`;
