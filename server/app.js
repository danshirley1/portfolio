/**/
const SpotifyWebApi = require('spotify-web-api-node');
/**/

require('babel-register');
const { ApolloServer, gql } = require('apollo-server-express');


/**/
const baseUrlClient = 'http://localhost:3000';
const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/spotify/authorize-callback`,
});
/**/


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const spotifyRouter = require('./routes/spotify/index');

/* GRAPHQL SERVER */
// The GraphQL schema
const typeDefs = gql`
  type SpotifyUserProfileImage {
    url: String
  }
  type SpotifyUserProfileExternalUrls {
    spotify: String
  }
  type SpotifyUserProfile {
    display_name: String
    external_urls: SpotifyUserProfileExternalUrls
    images: [SpotifyUserProfileImage]
  }
  type Query {
    "A simple type for getting started!"
    sayHello: String
    spotifyUser(accessToken: String!): SpotifyUserProfile
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    sayHello: () => 'Hello!',
    spotifyUser: (root, args, context, info) => {
    // TODO: look for params - grab the accessToken from the graphql request and setTokens?      console.log();

      spotifyApi.setAccessToken(args.accessToken);

      // console.log('AAAAA [1]', root);
      console.log('AAAAA [2]', args);
      // console.log('AAAAA [3]', context);
      // console.log('AAAAA [4]', info);

      return spotifyApi.getUser('cowboyfromhull')
        .then((data) => { console.log('XXX data.body:', data.body); return data.body; })
        .catch((err) => { console.log('XXX BOOM, err:', err); });
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
/**/


const app = express();

apolloServer.applyMiddleware({ app });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/spotify/', spotifyRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => { next(createError(404)); });

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app, apolloServer };
