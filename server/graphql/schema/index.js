import { join } from 'path';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';

import resolvers from './spotify/resolvers';

const schema = loadSchemaSync(join(__dirname, './spotify/schema.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ]
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

export default schemaWithResolvers;
