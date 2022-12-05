import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';

import { showError } from '../app/app.actions';
import { errorHandler } from '../../utils/errorHandler';
import { SpotifyActionTypes } from './spotify.types';

export default function authorizeSpotifyUser(action$) {
  return action$.ofType(SpotifyActionTypes.AUTHORIZE_SPOTIFY_USER)
    .pipe(
      switchMap(() => ajax({
        url: 'http://localhost:3001/spotify/authorize',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })),
      map((data) => {
        window.location.assign(data.response.authorizeUrl);
        return { type: 'DUMMY' };
      }),
      catchError(errorHandler([], showError('Failed to authorise Spotify user'))),
    );
}