const typeDefs = `
  type SpotifyUserProfileImage {
    url: String!
  }
  type SpotifyUserProfileExternalUrls {
    spotify: String!
  }
  type SpotifyUserProfile {
    display_name: String!
    external_urls: SpotifyUserProfileExternalUrls!
    profileImage: SpotifyUserProfileImage!
  }
  type SpotifyArtist {
    id: String!
    name: String!
  }
  type SpotifyAlbum {
    id: String!
    name: String!
  }
  type SpotifyTrack {
    id: String!
    name: String!
    album: SpotifyAlbum!
    artists: [SpotifyArtist]!
  }
  type SpotifyUserPlaylist {
    id: String!
    name: String!
    tracks: [SpotifyTrack]!
  }
  type Query {
    visitingSpotifyUser(accessToken: String!): SpotifyUserProfile
    mySpotifyUser: SpotifyUserProfile
    visitingSpotifyUserPlaylists(accessToken: String!): [SpotifyUserPlaylist]!
  }
`;

module.exports = () => [typeDefs];
