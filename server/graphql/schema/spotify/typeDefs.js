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
    profileImage: SpotifyUserProfileImage
  }
  type Query {
    visitingSpotifyUser(accessToken: String!): SpotifyUserProfile
    mySpotifyUser: SpotifyUserProfile
  }
`;

module.exports = () => [typeDefs];
