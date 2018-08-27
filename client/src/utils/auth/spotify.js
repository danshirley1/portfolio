const isSpotifyAuthenticated = (spotifySession) => {
  console.log('XXX', spotifySession);

  if (spotifySession.hasOwnProperty('accessToken')) {

    console.log('YYY', spotifySession.accessToken !== null);
    return spotifySession.accessToken !== null;
  }

  return false;
};

export { isSpotifyAuthenticated as default };
