import { REHYDRATE } from 'redux-persist';
import { SPOTIFY_TOKENS } from '../../actions/spotify';

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

    default:
      return state;
  }
}
