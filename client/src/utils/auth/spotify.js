const isSpotifyAuthorized = (spotifySession) => {
  if (spotifySession.accessToken) {
    return spotifySession.accessToken !== null;
  }

  return false;
};

export { isSpotifyAuthorized as default };
