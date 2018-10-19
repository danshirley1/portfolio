const spotifyWebApiNode = jest.genMockFromModule('spotify-web-api-node');

spotifyWebApiNode.prototype = {
  ...spotifyWebApiNode.prototype,

  createAuthorizeURL: jest.fn().mockImplementation(() => 'fooBarAuthorizeURL'),

  authorizationCodeGrant: jest.fn().mockImplementation(() =>
    new Promise(resolve => resolve({
      body: {
        expires_in: 'expires_in_foobar',
        access_token: 'access_token_foobar',
        refresh_token: 'refresh_token_foobar',
      },
    }))),

  setAccessToken: jest.fn(),

  getMe: jest.fn().mockImplementation(() => new Promise(resolve => resolve({
    body: {
      foo: 'bar',
      images: [{ url: 'http://ww.example.com/foobar.jpg' }],
    },
  }))),

  getUser: jest.fn().mockImplementation(() => new Promise(resolve => resolve({
    body: {
      foo: 'bar',
      images: [{ url: 'http://ww.example.com/foobar.jpg' }],
    },
  }))),
};

export { spotifyWebApiNode as default };
