import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store/'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
