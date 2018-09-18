import SpotifyWebApi from 'spotify-web-api-node';
import { createError } from 'apollo-errors';

// const baseUrlClient = 'http://localhost:3000';
const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/spotify/authorize-callback`,
});

const SpotifyUnauthenticatedError = createError('SpotifyUnauthenticatedError', {
  message: 'The provided Spotify credentials are invalid.',
});

export default {
  Query: {
    sayHello: () => 'Hello!',
    visitingSpotifyUser: (root, args, context, info) => {
    // TODO: look for params - grab the accessToken from the graphql request and setTokens?      console.log();

      spotifyApi.setAccessToken(args.accessToken);

      // console.log('AAAAA [1]', root);
      console.log('AAAAA [2]', args);
      // console.log('AAAAA [3]', context);
      // console.log('AAAAA [4]', info);

      // return spotifyApi.getUser('cowboyfromhull')
      return spotifyApi.getMe()
        .then((data) => { console.log('XX1 data.body:', data.body); return data.body; })
        .catch((err) => { console.log('XX2 BOOM, err:', err);  });
    },
    mySpotifyUser: (root, args, context, info) => {
      return spotifyApi.getUser('cowboyfromhull')
        .then((data) => {
          console.log('YY1 data.body:', data.body); return data.body;
        })
        .catch((err) => {
          console.log('YY2 BOOM, err:', err);

          if (err.statusCode === 401) {
            return new SpotifyUnauthenticatedError();
          }

          return err;
        });
    },
  },
};

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

// set the app's access and refresh tokens
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }

  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
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