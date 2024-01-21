/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './styles/main.css';

import AppContainer from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store, { persistor, history } from './store';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function render(Component) {
  ReactDOM.render(
    (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
              <Component />
            </ConnectedRouter>
          </PersistGate>
        </ApolloProvider>
      </Provider>
    ),
    document.getElementById('root'),
  );
}

render(AppContainer);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require
    render(NextApp);
  });
}

registerServiceWorker();
