import React from 'react';
import { shallow } from 'enzyme';

import { dataTestTag } from '../../test/helpers';
import AuthHub from './AuthHub';

describe('AuthHub Component', () => {
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
      <AuthHub {...componentProps} />
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it("renders a button which fires an 'authorize' action when clicked", () => {
    const btn = component.find(dataTestTag('on-authorize-button'));
    expect(btn).toHaveLength(1);
    btn.simulate('click');
    expect(defaultProps.onAuthorize).toHaveBeenCalled();
  });
});
