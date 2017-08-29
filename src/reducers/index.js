import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from '../components/Counter'
import spotifyReducer from './spotify/'

export default combineReducers({
  routing: routerReducer,
  counter,
  spotifyReducer,
})
