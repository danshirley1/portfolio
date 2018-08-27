/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store/';

console.log('ENTERING APP');

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'));

registerServiceWorker();
