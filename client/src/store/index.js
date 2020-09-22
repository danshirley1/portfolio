import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';

import spotifyReducer from '../reducers/spotify';
import rootEpic from '../epics';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware(history),
  epicMiddleware,
];

// dev tools
if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  spotifySession: spotifyReducer,
  router: connectRouter(history),
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(
  persistedRootReducer,
  initialState,
  composedEnhancers,
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

export default store;
