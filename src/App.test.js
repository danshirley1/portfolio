import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App';
import store, { history } from './store/'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  ), div);
});

