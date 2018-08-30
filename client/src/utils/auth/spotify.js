const isSpotifyAuthenticated = (spotifySession) => {
  if (spotifySession.accessToken) {
    return spotifySession.accessToken !== null;
  }

  return false;
};

export { isSpotifyAuthenticated as default };
