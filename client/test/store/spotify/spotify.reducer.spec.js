import { createStore } from 'redux';

import reducer from '../../../store/spotify/spotify.reducer';
import { setTokens } from '../../../store/spotify/spotify.actions';

describe('spotify reducer', () => {
  const initialReducerState = {
    accessToken: null,
    refreshToken: null,
    visitingUser: { loading: false },
    myUser: { loading: false },
  };

  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('renders initial state', () => {
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });

  it('sets spotify authentication tokens', () => {
    store.dispatch(setTokens({ accessToken: 'foo', refreshToken: 'bar' }));
    const state = store.getState();
    expect(state.accessToken).toBe('foo');
    expect(state.refreshToken).toBe('bar');
  });
});
