import SpotifyWebApi from 'spotify-web-api-node';

const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/api/spotify-auth-callback`,
});


const spotifyAuthenticate = (req, res) => {
  const scopes = ['user-read-private'];
  const state = {};

  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
};

export { spotifyAuthenticate as default };
