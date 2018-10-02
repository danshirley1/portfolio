import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import gql from 'graphql-tag';
import wait from 'waait';
import { createError } from 'apollo-errors';
import * as routerDomLib from 'react-router-dom';

import { SpotifyProfiles } from './SpotifyProfiles';
import GET_VISITING_AND_MY_SPOTIFY_USER from '../../graphql/queries/spotify';

describe('SpotifyProfiles Container', () => {
  let component;

  const defaultProps = {
    spotifySession: {
      accessToken: 'foobar',
    },
    graphQlMocks: [
      {
        request: {
          query: gql(GET_VISITING_AND_MY_SPOTIFY_USER),
          variables: {
            accessToken: 'foobar',
          },
        },
        result: {
          data: {
            visitingSpotifyUser: {
              display_name: 'bob',
              external_urls: [],
              images: [],
            },
            mySpotifyUser: {
              display_name: 'john',
              external_urls: [],
              images: [],
            },
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
  });
});
