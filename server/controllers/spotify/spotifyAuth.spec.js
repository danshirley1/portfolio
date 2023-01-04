/* eslint-disable no-multi-str */

import { spotifyAuthorize, spotifyAuthorizeCallback } from './spotifyAuth';

describe('Spotify routes', () => {
  describe('GET /authorise', () => {
    it('redirects response with an authorise URL', async () => {
      const send = jest.fn();
      const res = { send };

      await spotifyAuthorize({}, res);
      expect(send).toHaveBeenCalledWith({
        authorizeUrl: 'fooBarAuthorizeURL',
      });
    });
  });

  describe('GET /authorise-callback', () => {
    it('returns tokens from successful authorisation', async () => {
      const req = { query: 'foobar' };
      const redirect = jest.fn();
      const res = { redirect };

      await spotifyAuthorizeCallback(req, res);

      expect(redirect).toHaveBeenCalledWith('http://localhost:3000/spotify-authentication-success/access_token_foobar\
/refresh_token_foobar');
    });
  });
});
