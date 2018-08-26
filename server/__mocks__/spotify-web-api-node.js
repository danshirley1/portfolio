const spotifyWebApiNode = jest.genMockFromModule('spotify-web-api-node');

spotifyWebApiNode.prototype.createAuthorizeURL = jest.fn().mockImplementation(() => 'fooBarAuthorizeURL');

export { spotifyWebApiNode as default };
