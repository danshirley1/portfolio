import SpotifyWebApi from 'spotify-web-api-node';
import { createError } from 'apollo-errors';

// const baseUrlClient = 'http://localhost:3000';
const baseUrlServer = 'http://localhost:3001';
const spotifyApi = new SpotifyWebApi({
  clientId: 'd2a3bf4fd63748edace443314d41508d',
  clientSecret: 'ce9d75db2df34b5aa09fa371c2f03ac1',
  redirectUri: `${baseUrlServer}/spotify/authorize-callback`,
});

// TODO: farm out to some type of errors collection
// TODO: catch this on front-end > redirerct user to login?
const SpotifyUnauthenticatedError = createError('SpotifyUnauthenticatedError', {
  message: 'The provided Spotify credentials are invalid.',
});

export default {
  Query: {
    visitingSpotifyUser: async (root, args) => {
      spotifyApi.setAccessToken(args.accessToken);

      const user = await spotifyApi.getMe()
        .catch((err) => {
          if (err.statusCode === 401) {
            return new SpotifyUnauthenticatedError();
          }

          return err;
        });

      return {
        ...user.body,
        profileImage: user.body.images[0],
      };
    },
    mySpotifyUser: async () => {
      const user = await spotifyApi.getUser('cowboyfromhull')
        .catch((err) => {
          if (err.statusCode === 401) {
            return new SpotifyUnauthenticatedError();
          }

          return err;
        });

      return {
        ...user.body,
        profileImage: user.body.images[0],
      };
    },
    visitingSpotifyUserPlaylists: async (root, args) => {
      spotifyApi.setAccessToken(args.accessToken);

      const user = await spotifyApi.getMe()
        .catch((err) => {
          if (err.statusCode === 401) {
            return new SpotifyUnauthenticatedError();
          }

          return err;
        });

      const playlists = await spotifyApi.getUserPlaylists(user.id);
      const playlistCalls = playlists.body.items.map(async (playlist) => {
        const playlistData = {
          id: playlist.id,
          name: playlist.name,
          tracks: [],
        };
        const playlistTracks = await spotifyApi.getPlaylistTracks(user.id, playlist.id);

        playlistTracks.body.items.forEach((trackData) => {
          // TODO: log if null?
          if (trackData.track.id) {
            playlistData.tracks.push({
              id: trackData.track.id,
              name: trackData.track.name,
              album: trackData.track.album,
              artists: trackData.track.artists,
            });
          }
        });

        return playlistData;
      });

      return Promise.all(playlistCalls);
    },
    // TODO: visitingSpotifyUserPlaylists() and mySpotifyUserPlaylists() have alot of commonality - refactor
    mySpotifyUserPlaylists: async () => {
      const user = await spotifyApi.getUser('cowboyfromhull')
        .catch((err) => {
          if (err.statusCode === 401) {
            return new SpotifyUnauthenticatedError();
          }

          return err;
        });

      const playlists = await spotifyApi.getUserPlaylists(user.id);
      const playlistCalls = playlists.body.items.map(async (playlist) => {
        const playlistData = {
          id: playlist.id,
          name: playlist.name,
          tracks: [],
        };
        const playlistTracks = await spotifyApi.getPlaylistTracks(user.id, playlist.id);

        playlistTracks.body.items.forEach((trackData) => {
          // TODO: log if null?
          if (trackData.track.id) {
            playlistData.tracks.push({
              id: trackData.track.id,
              name: trackData.track.name,
              album: trackData.track.album,
              artists: trackData.track.artists,
            });
          }
        });

        return playlistData;
      });

      return Promise.all(playlistCalls);
    },
  },
};
