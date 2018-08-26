import spotifyAuthenticate from './spotifyAuth';

describe('Spotify routes', () => {
  describe('GET /authenticate', () => {
    it('redirects response with an authorise URL', () => {
      const redirect = jest.fn();
      const res = { redirect };

      spotifyAuthenticate({}, res);
      expect(redirect).toHaveBeenCalledWith('fooBarAuthorizeURL');
    });
  });
});
