const typeDefs = `
  type SpotifyUserProfileImage {
    url: String
  }
  type SpotifyUserProfileExternalUrls {
    spotify: String
  }
  type SpotifyUserProfile {
    display_name: String
    external_urls: SpotifyUserProfileExternalUrls
    images: [SpotifyUserProfileImage]
  }
  type Query {
    "A simple type for getting started!"
    sayHello: String
    spotifyUser(accessToken: String!): SpotifyUserProfile
  }
`;

module.exports = () => [typeDefs];
