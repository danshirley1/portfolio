import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mockServer,
} from 'graphql-tools';

import { graphql } from 'graphql';

const typeDefs = require('./schema.graphql')();

const schema = makeExecutableSchema({ typeDefs });

const tests = [
  {
    id: 'visitingSpotifyUser()',
    query: `
      query {
        visitingSpotifyUser (accessToken: "foo") {
          display_name
          external_urls { spotify }
          profileImage { url }
        }
      }
    `,
    variables: {},
    context: {},
    expected: {
      data: {
        visitingSpotifyUser: {
          display_name: 'Foobar',
          external_urls: {
            spotify: 'Foobar',
          },
          profileImage: {
            url: 'Foobar',
          },
        },
      },
    },
  },
  {
    id: 'mySpotifyUser()',
    query: `
      query {
        mySpotifyUser {
          display_name
          external_urls { spotify }
          profileImage { url }
        }
      }
    `,
    expected: {
      data: {
        mySpotifyUser: {
          display_name: 'Foobar',
          external_urls: {
            spotify: 'Foobar',
          },
          profileImage: {
            url: 'Foobar',
          },
        },
      },
    },
  },
];

describe('Spotify schema', () => {
  addMockFunctionsToSchema({
    schema,
    mocks: {
      Boolean: () => false,
      ID: () => '1',
      Int: () => 1,
      Float: () => 12.34,
      String: () => 'Foobar',
    },
  });

  it('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);

      await MockServer.query('{ __schema { types { name } } }'); // todo - where does 'name' come from?
    }).not.toThrow();
  });

  describe('Queries', () => {
    tests.forEach((obj) => {
      const {
        id,
        query,
        variables,
        context: ctx,
        expected,
      } = obj;

      it(`query: ${id}`, async () =>
        expect(graphql(schema, query, null, { ctx }, variables)).resolves.toEqual(expected));
    });
  });
});
