import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import spotifyReducer from './spotify/'

export default combineReducers({
  routing: routerReducer,
  spotifySession: spotifyReducer,
})
