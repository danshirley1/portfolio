import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { App } from './App';

const mockStore = configureStore();
const history = createBrowserHistory();

it('renders without crashing', () => {
  shallow((
    <ConnectedRouter history={history} store={mockStore({})}>
      <App />
    </ConnectedRouter>
  ));
});
