import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import AuthHub from '../../../containers/authentication/AuthHub';
import { authorizeSpotifyUser } from '../../../store/spotify/spotify.actions';

describe('AuthHub Container', () => {
  let component;
  let authHubView;
  let mockStore;

  const defaultProps = {
    authorizeSpotifyUser: jest.fn(() => 'authorizeSpotifyUser called'),
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    const storeProps = {
      authorizeSpotifyUser: componentProps.authorizeSpotifyUser,
    };

    return shallow((
      <AuthHub {...componentProps} store={mockStore(storeProps)} />
    ));
  };

  beforeEach(() => {
    mockStore = configureStore();
    component = getComponent();
    authHubView = component.find('AuthHub');
  });

  it('renders an AuthHub component', () => {
    expect(authHubView).toHaveLength(1);
    expect(authHubView.prop('authorizeSpotifyUser')()).toEqual(authorizeSpotifyUser());
  });
});
