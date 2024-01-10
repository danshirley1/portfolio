import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { gql } from '@apollo/client';
import wait from 'waait';
import { createError } from 'apollo-errors';
import { GET_SPOTIFY_PROFILES_USER_DATA } from '../../graphql/queries/spotify';

import SpotifyProfiles from './SpotifyProfiles';

describe('SpotifyProfiles component', () => {
  let component;

  const defaultProps = {
    accessToken: 'footoken',
    userArtists: [1, 2, 3],
    doProfilesDataLoaded: jest.fn(),
    graphQlMocks: [
      {
        request: {
          query: gql(GET_SPOTIFY_PROFILES_USER_DATA),
          variables: {
            accessToken: 'footoken',
          },
        },
        result: {
          data: {
            visitingSpotifyUser: {
              display_name: 'bob',
              external_urls: [],
              profileImage: {
                url: 'http://example.com/example1.jpg',
              },
            },
            mySpotifyUser: {
              display_name: 'john',
              external_urls: [],
              profileImage: {
                url: 'http://example.com/example2.jpg',
              },
            },
            visitingSpotifyUserPlaylists: [
              {
                id: 1,
                name: 'foo',
                tracks: [
                  {
                    album: {
                      id: 10,
                      name: 'flim',
                    },
                    artists: [
                      {
                        id: 100,
                        name: 'bruce',
                      },
                    ],
                    id: 1,
                    name: 'foo',
                  },
                  {
                    album: {
                      id: 11,
                      name: 'flam',
                    },
                    artists: [
                      {
                        id: 101,
                        name: 'kylie',
                      },
                    ],
                    id: 2,
                    name: 'foo',
                  },
                ],
              },
            ],
            mySpotifyUserPlaylists: [
              {
                id: 10,
                name: 'flim',
                tracks: [
                  {
                    album: {
                      id: 100,
                      name: 'flimmer',
                    },
                    artists: [
                      {
                        id: 1000,
                        name: 'abba',
                      },
                    ],
                    id: 10,
                    name: 'fooflam',
                  },
                  {
                    album: {
                      id: 110,
                      name: 'flammer',
                    },
                    artists: [
                      {
                        id: 1001,
                        name: 'jason',
                      },
                    ],
                    id: 20,
                    name: 'fooflam',
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return mount((
      <Router>
        <MockedProvider mocks={componentProps.graphQlMocks} addTypename={false}>
          <SpotifyProfiles {...componentProps} />
        </MockedProvider>
      </Router>
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', async () => {
    expect(component.text()).toBe('Loading...');
  });

  it('renders error state', async () => {
    component = getComponent({
      graphQlMocks: [{
        ...defaultProps.graphQlMocks[0],
        error: new Error(),
      }],
    });

    await act(async () => {
      await wait(0);
    });

    expect(component.text()).toBe('Unhandled error!');
  });

  it('renders the error state (unauthorised)', async () => {
    const SpotifyUnauthenticatedError = createError('SpotifyUnauthenticatedError', { message: 'foobar' });

    component = getComponent({
      graphQlMocks: [{
        ...defaultProps.graphQlMocks[0],
        result: {
          errors: [new SpotifyUnauthenticatedError()],
        },
      }],
    });

    await act(async () => {
      await wait(0);
      component.update();
    });

    expect(component.find('Redirect').props()).toEqual({ to: '/auth-hub' });
  });

  it('renders final state', async () => {
    await act(async () => {
      await wait(0);
      component.update();
    });

    const commonalityResults = component.find('CommonalityResults');

    const visitingUser = component.find('UserSummary').at(0);
    const myUser = component.find('UserSummary').at(1);

    // Commonality results
    expect(commonalityResults.prop('userArtists')).toEqual(defaultProps.userArtists);

    // User details
    expect(visitingUser.prop('user')).toEqual(defaultProps.graphQlMocks[0].result.data.visitingSpotifyUser);
    expect(myUser.prop('user')).toEqual(defaultProps.graphQlMocks[0].result.data.mySpotifyUser);

    // User playlists
    expect(visitingUser.prop('playlists')).toEqual(defaultProps.graphQlMocks[0].result.data.visitingSpotifyUserPlaylists);
    expect(myUser.prop('playlists')).toEqual(defaultProps.graphQlMocks[0].result.data.mySpotifyUserPlaylists);
  });
});
