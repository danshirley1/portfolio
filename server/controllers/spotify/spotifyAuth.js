import SpotifyWebApi from 'spotify-web-api-node';

const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/api/spotify-auth-callback`,
});


export const spotifyAuthorize = (req, res) => {
  const scopes = ['user-read-private'];
  const state = {};

  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
};

export const spotifyAuthorizeCallback = (req, res) => {
  // const { code, state } = req.query; // TODO state?
  const { code } = req.query;

  // Retrieve an access token and a refresh token
  return spotifyApi.authorizationCodeGrant(code).then((data) => {
    const { expires_in, access_token, refresh_token } = data.body;

    //donotcommit (temp)
    res.body = { expires_in, access_token, refresh_token };

    /*
    // use the access token to access the Spotify Web API
    // THIS NEEDS SPLITTING IN TO SOME FURTHER CALL OR OTHER - DS
    spotifyApi.getMe().then(({ body }) => {
      //console.log(body);
    });
    */

    return res;
  }).catch(err => console.log('BOOM!', err));

  // we can also pass the token to the browser to make requests from there
  // OLD NOW - DS
  // res.redirect(`${baseUrl_client}/spotify-authentication-success/${access_token}/${refresh_token}`);
};
