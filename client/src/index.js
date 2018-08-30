/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store, { persister, history } from './store/';

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate persistor={persister}>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
