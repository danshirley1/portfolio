import React from 'react';
import { shallow } from 'enzyme';

import SpotifyProfiles from '../../../src/components/spotify/SpotifyProfiles';

describe('SpotifyProfiles Component', () => {
  let component;

  const defaultProps = {
    visitingUser: {
      foo: 'bar',
    },
    myUser: {
      flim: 'flam',
    },
    visitingUserPlaylists: {
      bar: 'foo',
    },
    myUserPlaylists: {
      flam: 'flim',
    },
  };

  const getComponent = (moreProps = {}) => {
    const componentProps = {
      ...defaultProps,
      ...moreProps,
    };

    return shallow((
      <SpotifyProfiles {...componentProps} />
    ));
  };

  beforeEach(() => {
    component = getComponent();
  });

  it("renders a UserSummary component with expected props for the 'visiting user'", () => {
    const summaryComponent = component.find('UserSummary').at(0);
    expect(summaryComponent).toHaveLength(1);
    expect(summaryComponent.prop('user')).toEqual(defaultProps.visitingUser);
    expect(summaryComponent.prop('playlists')).toEqual(defaultProps.visitingUserPlaylists);
  });

  it("renders a UserSummary component with expected props for 'my user'", () => {
    const summaryComponent = component.find('UserSummary').at(1);
    expect(summaryComponent).toHaveLength(1);
    expect(summaryComponent.prop('user')).toEqual(defaultProps.myUser);
    expect(summaryComponent.prop('playlists')).toEqual(defaultProps.myUserPlaylists);
  });
});
