import resolvers from './resolvers';

describe('Spotify resolvers', () => {
  describe('Query', () => {
    const {
      visitingSpotifyUser,
      mySpotifyUser,
      visitingSpotifyUserPlaylists,
    } = resolvers.Query;

    it('visitingSpotifyUser()', async () => {
      const result = await visitingSpotifyUser({}, { accessToken: 'fooToken' });

      expect(result).toEqual({
        foo: 'bar',
        images: [{ url: 'http://ww.example.com/foobar.jpg' }],
        profileImage: { url: 'http://ww.example.com/foobar.jpg' },
      });
    });

    it('mySpotifyUser()', async () => {
      const result = await mySpotifyUser();

      expect(result).toEqual({
        foo: 'bar',
        images: [{ url: 'http://ww.example.com/foobar.jpg' }],
        profileImage: { url: 'http://ww.example.com/foobar.jpg' },
      });
    });

    it('visitingSpotifyUserPlaylists()', async () => {
      const result = await visitingSpotifyUserPlaylists({}, { accessToken: 'fooToken' });

      expect(result).toEqual([
        {
          id: 1,
          name: 'foo',
          tracks: [
            {
              album: {
                id: 10,
                name: 'flim',
              },
              artists: [
                {
                  id: 100,
                  name: 'bruce',
                },
              ],
              id: 1,
              name: 'foo',
            },
            {
              album: {
                id: 11,
                name: 'flam',
              },
              artists: [
                {
                  id: 101,
                  name: 'kylie',
                },
              ],
              id: 2,
              name: 'foo',
            },
          ],
        },
        {
          id: 2,
          name: 'bar',
          tracks: [
            {
              album: {
                id: 10,
                name: 'flim',
              },
              artists: [
                {
                  id: 100,
                  name: 'bruce',
                },
              ],
              id: 1,
              name: 'foo',
            },
            {
              album: {
                id: 11,
                name: 'flam',
              },
              artists: [
                {
                  id: 101,
                  name: 'kylie',
                },
              ],
              id: 2,
              name: 'foo',
            },
          ],
        },
      ]);
    });

    // TODO test for error
  });
});
