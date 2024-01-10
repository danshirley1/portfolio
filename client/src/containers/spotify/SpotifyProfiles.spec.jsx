import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import wait from 'waait';

import { SpotifyProfiles } from './SpotifyProfiles.tsx';

describe('SpotifyProfiles Container', () => {
  let component;

  const defaultProps = {
    spotifySession: {
      accessToken: 'foobar',
    },
    onSetUserArtists: jest.fn(),
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return mount((
      <Router>
        <MockedProvider>
          <SpotifyProfiles {...componentProps} />
        </MockedProvider>
      </Router>
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it('renders view component with expected props', async () => {
    await act(async () => {
      await wait(0);
      component.update();
    });

    const spotifyProfilesView = component.find('SpotifyProfiles').at(1);

    expect(spotifyProfilesView.prop('accessToken')).toBe('foobar');
  });

  describe('doProfilesDataLoaded() is called by child component', () => {
    it('and onSetUserArtists() is called if userArtists not already set in store', async () => {
      await act(async () => {
        await wait(0);
        component.update();
      });

      const spotifyProfilesView = component.find('SpotifyProfiles').at(1);

      spotifyProfilesView.prop('doProfilesDataLoaded')({
        visitingSpotifyUserPlaylists: [],
        mySpotifyUserPlaylists: [],
      });
      expect(defaultProps.onSetUserArtists).toBeCalledWith({
        visitingSpotifyUserPlaylists: [],
        mySpotifyUserPlaylists: [],
      });
    });
  });
});
