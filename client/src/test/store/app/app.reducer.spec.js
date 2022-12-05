import { createStore } from 'redux';

import reducer from '../../../store/app/app.reducer';
import { showAlert } from '../../../store/app/app.actions';

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
