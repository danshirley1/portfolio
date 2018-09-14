import { makeExecutableSchema } from 'graphql-tools';
import SpotifyWebApi from 'spotify-web-api-node';

import spotifyTypeDefs from './spotify';

// const baseUrlClient = 'http://localhost:3000';
const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/spotify/authorize-callback`,
});

const schema = makeExecutableSchema({
  typeDefs: [spotifyTypeDefs],
  resolvers: {
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
  },
});

export default schema;
