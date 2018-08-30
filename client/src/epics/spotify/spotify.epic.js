import { Observable } from 'rxjs';
// import createBrowserHistory from 'history/createBrowserHistory';

import { AUTHORIZE_SPOTIFY_USER } from '../../actions/spotify';

export default function authorizeSpotifyUser(action$) {
  return action$.ofType(AUTHORIZE_SPOTIFY_USER)
    .switchMap(() => Observable.ajax({
      url: 'http://localhost:3001/spotify/authorize',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .map((data) => {
        window.location.assign(data.response.authorizeUrl);
        return { type: 'DUMMY' };
      })
      .catch(err => console.log('ERROR IN SPOTIFY EPIC:', err)));
}
