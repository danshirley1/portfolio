const spotifyWebApiNode = jest.genMockFromModule('spotify-web-api-node');

spotifyWebApiNode.prototype = {
  ...spotifyWebApiNode.prototype,

  createAuthorizeURL: jest.fn().mockImplementation(() => 'fooBarAuthorizeURL'),

  authorizationCodeGrant: jest.fn().mockImplementation(() => new Promise((resolve) => resolve({
    body: {
      expires_in: 'expires_in_foobar',
      access_token: 'access_token_foobar',
      refresh_token: 'refresh_token_foobar',
    },
  }))),

  setAccessToken: jest.fn(),

  getMe: jest.fn().mockImplementation(() => new Promise((resolve) => resolve({
    body: {
      foo: 'bar',
      images: [{ url: 'http://ww.example.com/foobar.jpg' }],
    },
  }))),

  getUser: jest.fn().mockImplementation(() => new Promise((resolve) => resolve({
    body: {
      foo: 'bar',
      images: [{ url: 'http://ww.example.com/foobar.jpg' }],
    },
  }))),

  getUserPlaylists: jest.fn().mockImplementation(() => new Promise((resolve) => resolve({
    body: {
      items: [
        {
          id: 1,
          name: 'foo',
        },
        {
          id: 2,
          name: 'bar',
        },
      ],
    },
  }))),

  getPlaylistTracks: jest.fn().mockImplementation(() => new Promise((resolve) => resolve({
    body: {
      items: [
        {
          track: {
            id: 1,
            name: 'foo',
            album: {
              id: 10,
              name: 'flim',
            },
            artists: [
              {
                id: 100,
                name: 'bruce',
              },
            ],
          },
        },
        {
          track: {
            id: 2,
            name: 'foo',
            album: {
              id: 11,
              name: 'flam',
            },
            artists: [
              {
                id: 101,
                name: 'kylie',
              },
            ],
          },
        },
      ],
    },
  }))),
};

export { spotifyWebApiNode as default };

/*
body.items.forEach((playlist) => {
            playlistCalls.push(new Promise((resolve, reject) => {
              const playlistData = {
                id: playlist.id,
                name: playlist.name,
                tracks: [],
              };

              return spotifyApi.getPlaylistTracks(userId, playlist.id, queryOptions)
                .then((playlistTrackData) => {
                  playlistTrackData.body.items.forEach((trackData) => {
                    // TODO: log if null?
                    if (trackData.track.id) {
                      playlistData.tracks.push({
                        id: trackData.track.id,
                        name: trackData.track.name,
                        album: trackData.track.album,
                        artists: trackData.track.artists,
                      });
                    }
                  });

*/
