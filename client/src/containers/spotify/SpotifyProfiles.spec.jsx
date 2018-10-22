import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import gql from 'graphql-tag';
import wait from 'waait';
import { createError } from 'apollo-errors';
import * as routerDomLib from 'react-router-dom';

import { SpotifyProfiles } from './SpotifyProfiles';
import GET_SPOTIFY_PROFILES_USER_DATA from '../../graphql/queries/spotify';

describe('SpotifyProfiles Container', () => {
  let component;

  const defaultProps = {
    spotifySession: {
      accessToken: 'foobar',
    },
    graphQlMocks: [
      {
        request: {
          query: gql(GET_SPOTIFY_PROFILES_USER_DATA),
          variables: {
            accessToken: 'foobar',
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
      <MockedProvider mocks={componentProps.graphQlMocks} addTypename={false}>
        <SpotifyProfiles spotifySession={componentProps.spotifySession} />
      </MockedProvider>
    ));
  };

  beforeEach(() => {
    component = getComponent();
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
    await wait(0);
    expect(component.text()).toBe('Error!');
  });

  it('renders error state (unauthorised)', async () => {
    const SpotifyUnauthenticatedError = createError('SpotifyUnauthenticatedError', { message: 'foobar' });
    const redirectSpy = jest.spyOn(routerDomLib, 'Redirect');

    component = getComponent({
      graphQlMocks: [{
        ...defaultProps.graphQlMocks[0],
        result: {
          errors: [new SpotifyUnauthenticatedError()],
        },
      }],
    });
    await wait(0);
    component.update();
    expect(redirectSpy).toHaveBeenLastCalledWith({ to: '/auth-hub' }, {});
    redirectSpy.mockRestore();
  });

  it('renders final state', async () => {
    await wait(0);
    component.update();
    const spotifyProfilesView = component.find('SpotifyProfiles').at(1);
    expect(spotifyProfilesView.prop('visitingUser')).toEqual(defaultProps.graphQlMocks[0].result.data.visitingSpotifyUser);
    expect(spotifyProfilesView.prop('myUser')).toEqual(defaultProps.graphQlMocks[0].result.data.mySpotifyUser);
    expect(spotifyProfilesView.prop('visitingUserPlaylists'))
      .toEqual(defaultProps.graphQlMocks[0].result.data.visitingSpotifyUserPlaylists);
    expect(spotifyProfilesView.prop('myUserPlaylists'))
      .toEqual(defaultProps.graphQlMocks[0].result.data.mySpotifyUserPlaylists);
  });
});
