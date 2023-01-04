import React from 'react';
import { shallow } from 'enzyme';

import { dataTestTag } from '../../helpers';
import UserSummary from '../../../components/spotify/UserSummary';

describe('UserSummary Component', () => {
  let component;

  const defaultProps = {
    user: {
      display_name: 'Jane Doe',
      profileImage: [
        {
          url: 'www.example.com/foo.jpg',
        },
      ],
      external_urls: {
        spotify: 'www.example.com/foobar',
      },
    },
    playlists: [
      {
        foo: 'bar',
      },
    ],
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return shallow((
      <UserSummary {...componentProps} />
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it('renders a summary header with correct user name', () => {
    const comp = component.find(dataTestTag('summary-display-name-header'));
    expect(comp.text()).toContain(defaultProps.user.display_name);
  });

  it('renders a user avatar with correct props', () => {
    const comp = component.find(dataTestTag('summary-user-avatar'));
    expect(comp.prop('src')).toBe(defaultProps.user.profileImage.url);
    expect(comp.prop('alt')).toBe('User avatar');
  });

  it('renders a Spotify user URI with correct address', () => {
    const comp = component.find(dataTestTag('summary-spotify-uri'));
    expect(comp.prop('href')).toBe(defaultProps.user.external_urls.spotify);
    expect(comp.text()).toBe(defaultProps.user.external_urls.spotify);
  });

  it('renders correct amount of playlists', () => {
    const comp = component.find(dataTestTag('playlists-length'));
    expect(comp.text()).toBe('1');
  });
});
