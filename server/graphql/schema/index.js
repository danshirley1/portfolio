import { makeExecutableSchema } from 'graphql-tools';

import spotifyTypeDefs from '../../../client/src/graphql/schema/spotify/typeDefs';
import spotifyResolvers from './spotify/resolvers';

const schema = makeExecutableSchema({
  typeDefs: [spotifyTypeDefs],
  resolvers: [spotifyResolvers],
});

export default schema;
