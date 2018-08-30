import { Observable } from 'rxjs';
// import createBrowserHistory from 'history/createBrowserHistory';

import { AUTHORIZE_SPOTIFY_USER, NAV_AUTHORIZED_USER_TO_SPOTIFY_PROFILES_VIEW } from '../../actions/spotify';

export function doSomething(action$) {
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

export function navAuthorizedUserToSpotifyProfilesView(action$) {
  return action$.ofType(NAV_AUTHORIZED_USER_TO_SPOTIFY_PROFILES_VIEW)
    .map((action) => {
      action.payload.history.replace('/spotify-profiles');
      return { type: 'DUMMY' };
    });
}
