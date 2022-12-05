import { Observable } from 'rxjs';
// import dotProps from 'dot-prop-immutable';

import mockEpic from '../../helpers';

import {
  AUTHORIZE_SPOTIFY_USER,
} from '../../store/spotify/spotify.actions';

import authorizeSpotifyUser from './spotify.epic';

describe('spotify epics', () => {
  const originalAjaxGet = Observable.ajax;

  afterEach(() => {
    Observable.ajax = originalAjaxGet;
  });

  describe('authorizeSpotifyUser', () => {
    let mock;

    beforeEach(() => {
      mock = mockEpic(authorizeSpotifyUser);
    });

    afterEach(() => {
      mock.restore();
    });

    it('remote verification processes successfully', () => {
      Observable.ajax = jest.fn(() => Observable.of({
        response: {
          type: 'DUMMY',
        },
      }));

      mock.dispatch({
        type: AUTHORIZE_SPOTIFY_USER,
      });

      expect(mock.getActions()).toEqual([
        {
          type: AUTHORIZE_SPOTIFY_USER,
        },
        {
          type: 'DUMMY',
        },
      ]);
    });

    it('produces general error', () => {
      mock.stubError();
      mock.dispatch({
        type: AUTHORIZE_SPOTIFY_USER,
      });

      expect(mock.getActions()).toEqual([
        {
          type: AUTHORIZE_SPOTIFY_USER,
        },
        { type: [], error: true, payload: { message: 'message', status: 500 } },
        { type: 'SHOW_ALERT', message: 'Failed to authorise Spotify user', status: 'error' },
      ]);
    });
  });
});
