import React from 'react';
import { shallow } from 'enzyme';

import { PageNotFound } from './PageNotFound';

describe('PageNotFound Container', () => {
  let component;

  const defaultProps = {};

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return shallow((
      <PageNotFound {...componentProps} />
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it('renders it', () => {
    expect(component.text()).toBe('PAGE NOT FOUND');
  });
});
