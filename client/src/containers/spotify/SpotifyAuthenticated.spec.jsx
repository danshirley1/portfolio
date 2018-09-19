import React from 'react';
import { shallow } from 'enzyme';

import { SpotifyAuthenticated } from './SpotifyAuthenticated';

describe('SpotifyAuthenticated Container', () => {
  let onSetTokens;
  let component;

  const defaultProps = {
    match: {
      params: {
        accessToken: 'foo',
        refreshToken: 'bar',
      },
    },
    onSetTokens,
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return shallow(<SpotifyAuthenticated {...componentProps} />);
  };

  beforeEach(() => {
    onSetTokens = jest.fn();
    component = getComponent({ onSetTokens });
  });

  it('sets tokens when component did mount', () => {
    expect(onSetTokens).toHaveBeenCalledWith({
      accessToken: 'foo',
      refreshToken: 'bar',
    });
  });

  it('renders a Redirect component', () => {
    expect(component.find('Redirect')).toHaveLength(1);
    expect(component.find('Redirect').prop('to')).toBe('/auth-success');
  });
});
