import isSpotifyAuthorized from './spotify';

describe('spotify', () => {
  describe('isSpotifyAuthorized', () => {
    it('is not authorized', () => {
      expect(isSpotifyAuthorized({})).toBe(false);
      expect(isSpotifyAuthorized({ foo: 'bar' })).toBe(false);
      expect(isSpotifyAuthorized({ accessToken: null })).toBe(false);
    });

    it('is authorized', () => {
      expect(isSpotifyAuthorized({ accessToken: 'foobar' })).toBe(true);
    });
  });
});
