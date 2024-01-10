import React from 'react';
import { shallow } from 'enzyme';

import { dataTestTag } from '../../../test/helpers';
import AuthSuccess from './AuthSuccess';

describe('AuthSuccess Component', () => {
  let component;

  const defaultProps = {
    onAuthorize: jest.fn(),
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return shallow((
      <AuthSuccess {...componentProps} />
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it("renders a link to the 'Spotify Profiles' view", () => {
    const link = component.find(dataTestTag('view-spotify-profiles-link'));
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe('/spotify-profiles');
  });
});
