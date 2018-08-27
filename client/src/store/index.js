import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/';

/** TODO Upgrade redux-persist to v5.n.n, see: https://github.com/rt2zz/redux-persist/issues/547 **/

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [autoRehydrate()];
const middleware = [
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers,
);

// begin periodically persisting the store
persistStore(store, {
  whitelist: ['spotifySession'],
}, () => {}); // .purge()

export default store;
