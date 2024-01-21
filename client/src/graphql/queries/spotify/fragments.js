export const SPOTIFY_USER = `
  display_name
  external_urls { spotify }
  profileImage { url }
`;

export const SPOTIFY_PLAYLIST = `
  id
  name
  tracks {
    id
    name
    album {
      id
      name
    }
    artists {
      id
      name
    }
  }
`;
