import { REHYDRATE } from 'redux-persist';
import {
  SPOTIFY_TOKENS,
//  SPOTIFY_ME_BEGIN,
//  SPOTIFY_ME_SUCCESS,
//  SPOTIFY_ME_FAILURE,
//  SPOTIFY_USER_BEGIN,
//  SPOTIFY_USER_SUCCESS,
//  SPOTIFY_USER_FAILURE,
} from '../../actions/spotify/';

const spotifyUserInitialState = {
  loading: false,
};

const initialState = {
  accessToken: null,
  refreshToken: null,
  visitingUser: Object.assign({}, spotifyUserInitialState),
  myUser: Object.assign({}, spotifyUserInitialState),
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    // redux-persist rehydration occured
    case REHYDRATE:
      return state;

    // when we get the tokens... set the tokens!
    case SPOTIFY_TOKENS: {
      const { accessToken, refreshToken } = action;

      return { ...state, accessToken, refreshToken };
    }

    /*
    // set our loading property when the loading begins (visiting user)
    case SPOTIFY_USER_BEGIN:
      return Object.assign({}, state, {
        visitingUser: Object.assign({}, state.visitingUser, { loading: true }),
      });

    // set our loading property when the loading begins (my user)
    case SPOTIFY_ME_BEGIN:
      return Object.assign({}, state, {
        myUser: Object.assign({}, state.myUser, { loading: true }),
      });

    // when we get the data merge it in (visiting user)
    case SPOTIFY_USER_SUCCESS:
      return Object.assign({}, state, {
        visitingUser: Object.assign({}, state.visitingUser, action.data, { loading: false }),
      });

    // when we get the data merge it in (my user)
    case SPOTIFY_ME_SUCCESS:
      return Object.assign({}, state, {
        myUser: Object.assign({}, state.myUser, action.data, { loading: false }),
      });

    // user fetch failed (visiting user)
    case SPOTIFY_USER_FAILURE:
      return state;

    // user fetch failed (my user)
    case SPOTIFY_ME_FAILURE:
      return state;
    */

    default:
      return state;
  }
}
