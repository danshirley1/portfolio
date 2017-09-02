const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const SpotifyAuth = require('./spotify/SpotifyAuth');

const app = express();

app.set('port', process.env.PORT || 3001);

app
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/spotify-authenticate', (req, res) => {
  /*
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }

  if (true) {
    res.json({
      someGoodKey: 'someGoodVal',
    });
  } else {
    res.json({
      someBadKey: 'someBadVal',
    });
  }
  */

  SpotifyAuth.authorize(res);
});

app.get('/api/spotify-auth-callback', (req, res) => {

  SpotifyAuth.authorizeCallback(req, res)
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
