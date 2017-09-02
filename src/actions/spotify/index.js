import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_USER_BEGIN = 'SPOTIFY_USER_BEGIN';
export const SPOTIFY_USER_SUCCESS = 'SPOTIFY_USER_SUCCESS';
export const SPOTIFY_USER_FAILURE = 'SPOTIFY_USER_FAILURE';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const SPOTIFY_USER_TEST_LOG_OUT = 'SPOTIFY_USER_TEST_LOG_OUT';

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get logged in user's info from the /me api */
export function getUserInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_USER_BEGIN});
    spotifyApi.getUser('cowboyfromhull').then(data => {
      dispatch({ type: SPOTIFY_USER_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_USER_FAILURE, error: e });
    });
  };
}

/* get my info from the /me api */
export function getMyInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN});
    spotifyApi.getMe().then(data => {
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}

export function testUserLoggedOut() {
  return dispatch => {
    dispatch({ type: SPOTIFY_USER_TEST_LOG_OUT});
  };
}