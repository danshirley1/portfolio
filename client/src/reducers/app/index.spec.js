import { createStore } from 'redux';

import reducer from './';
import { showAlert } from '../../actions/app';

describe('app reducer', () => {
  const initialReducerState = {
    notifications: {
      message: '',
      status: '',
      visible: false,
      withTimeout: true,
    },
  };

  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('renders initial state', () => {
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });

  it('shows an alert', () => {
    // TODO
  });
});
