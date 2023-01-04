import React from 'react';
import { shallow } from 'enzyme';

import AuthSuccess from '../../../containers/authentication/AuthSuccess';

describe('AuthSuccess Container', () => {
  let component;
  let authSuccessView;

  const defaultProps = {};

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
    authSuccessView = component.find('AuthSuccess');
  });

  it('renders an AuthSuccess component', () => {
    expect(authSuccessView).toHaveLength(1);
  });
});
