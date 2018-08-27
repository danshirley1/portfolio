// import Spotify from 'spotify-web-api-js';

// const spotifyApi = new Spotify();
// const myUserName = 'cowboyfromhull';

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_USER_BEGIN = 'SPOTIFY_USER_BEGIN';
export const SPOTIFY_USER_SUCCESS = 'SPOTIFY_USER_SUCCESS';
export const SPOTIFY_USER_FAILURE = 'SPOTIFY_USER_FAILURE';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';

/** set the app's access and refresh tokens */
export function setTokens({ accessToken, refreshToken }) {
  /*
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  */

  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/*
const getUserProfile = (userName, data) =>
  spotifyApi.getUser(userName)
    .then((profileData) => data.profileData = profileData);

const getUserPlaylists = (userName, data) =>
  spotifyApi.getUserPlaylists(userName)
    .then((playlistData) => data.playlistData = playlistData);

const getUserPlaylistTracks = (userName, playlistTrackItems, data) => {
  const playlistCalls = [];
  const queryOptions = {};

  for (let playlistTrackItem of playlistTrackItems) {
    playlistCalls.push(new Promise((resolve, reject) =>
      spotifyApi.getPlaylistTracks(userName, playlistTrackItem.id, queryOptions)
        .then((playlistTrackData) => {
          resolve(playlistTrackData);
        })
        .catch(error => {
          resolve(true)
          //reject(error)
        })
      )
    )
  }

  return Promise.all(playlistCalls)
    .then((trackData) => {
      return data.playlistTrackData = trackData
    })
    .catch(reason => { 
      console.log('ERROR B!', reason)
    });
}

// get logged in user's profile info
export function getUserInfo() {
  return dispatch => {
    const userData = {};

    dispatch({ type: SPOTIFY_USER_BEGIN});

    spotifyApi.getMe().then(data => {
      userData.profileData = data;
      
      dispatch({ type: SPOTIFY_USER_SUCCESS, data: userData });
    }).catch(e => {
      dispatch({ type: SPOTIFY_USER_FAILURE, error: e });
    });
  };
}

// get my profile info
export function getMyInfo() {
  return dispatch => {
    const userData = {};

    dispatch({ type: SPOTIFY_ME_BEGIN});
    
    getUserProfile(myUserName, userData)
      .then(() => getUserPlaylists(myUserName, userData))
      .then(() => getUserPlaylistTracks(myUserName, userData.playlistData.items, userData))
      .then(() => dispatch({ type: SPOTIFY_ME_SUCCESS, data: userData }))
      .catch(e => dispatch({ type: SPOTIFY_ME_FAILURE, error: e }));
  };
}
*/