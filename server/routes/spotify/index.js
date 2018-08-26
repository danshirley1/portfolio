import express from 'express';

const router = express.Router();
const baseUrlServer = 'http://localhost:3001';

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/api/spotify-auth-callback`,
});

router.get('/authenticate', (req, res) => {
  const scopes = ['user-read-private'];
  const state = {};

  spotifyApi.createAuthorizeURL(scopes, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

module.exports = router;
