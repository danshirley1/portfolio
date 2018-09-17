export const VISITING_SPOTIFY_USER = `
  visitingSpotifyUser(accessToken: $accessToken) {
    display_name
    external_urls { spotify }
    images { url }
  }
`;

export const MY_SPOTIFY_USER = `
  mySpotifyUser {
    display_name
    external_urls { spotify }
    images { url }
  }
`;

export const DUMMY = [VISITING_SPOTIFY_USER, MY_SPOTIFY_USER];
