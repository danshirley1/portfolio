import resolvers from './resolvers';

describe('Spotify resolvers', () => {
  describe('Query', () => {
    const { visitingSpotifyUser, mySpotifyUser } = resolvers.Query;

    it('visitingSpotifyUser()', async () => {
      const userResult = await visitingSpotifyUser({}, { accessToken: 'fooToken' }, {}, {});

      expect(userResult).toEqual({
        foo: 'bar',
        images: [{ url: 'http://ww.example.com/foobar.jpg' }],
        profileImage: { url: 'http://ww.example.com/foobar.jpg' },
      });
    });

    it('mySpotifyUser()', async () => {
      const userResult = await mySpotifyUser();

      expect(userResult).toEqual({
        foo: 'bar',
        images: [{ url: 'http://ww.example.com/foobar.jpg' }],
        profileImage: { url: 'http://ww.example.com/foobar.jpg' },
      });
    });

    // TODO test for error
  });
});
