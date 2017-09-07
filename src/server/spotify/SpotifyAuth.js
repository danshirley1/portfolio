const Spotify = require('spotify-web-api-node');

const scopes = [
  'user-read-private'
];
const STATE_KEY = 'spotify_auth_state';

const baseUrl_client = 'http://localhost:3000';
const baseUrl_server = 'http://localhost:3001';

const spotifyApi = new Spotify({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrl_server}/api/spotify-auth-callback`,
});

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

const authorize = (res) => {
  const state = generateRandomString(16);
  
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
};

const authorizeCallback = (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

  // first do state validation
  if (state === null || state !== storedState) {

/// TEMP
    res.redirect('http://www.google.com');
    //res.redirect('/#/error/state mismatch');
  } else {
    // if the state is valid, get the authorization code and pass it on to the client
    res.clearCookie(STATE_KEY);
    
    // Retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      // use the access token to access the Spotify Web API
      spotifyApi.getMe().then(({ body }) => {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect(`${baseUrl_client}/spotify-authentication-success/${access_token}/${refresh_token}`);
    }).catch(err => {
      res.redirect('/#/error/invalid token');
    });
  }
};

module.exports = {
  authorize,
  authorizeCallback,
};