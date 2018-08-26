import { spotifyAuthorize, spotifyAuthorizeCallback } from './spotifyAuth';

describe('Spotify routes', () => {
  describe('GET /authorise', () => {
    it('redirects response with an authorise URL', () => {
      const redirect = jest.fn();
      const res = { redirect };

      spotifyAuthorize({}, res);
      expect(redirect).toHaveBeenCalledWith('fooBarAuthorizeURL');
    });
  });

  describe('GET /authorise-callback', () => {
    it('returns tokens from successful authorisation', () => {
      const req = { query: 'foobar' };

      spotifyAuthorizeCallback(req, {}).then((res) => {
        expect(res).toEqual({
          body: {
            expires_in: 'expires_in_foobar',
            access_token: 'access_token_foobar',
            refresh_token: 'refresh_token_foobar',
          },
        });
      });
    });
  });
});
