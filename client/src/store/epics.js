import { combineEpics } from 'redux-observable';

import * as spotifyEpics from './spotify/spotify.epic';

export default combineEpics.apply(null, [
  ...Object.values(spotifyEpics),
]);
