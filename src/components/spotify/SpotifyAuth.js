import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

export const isSpotifyAuthenticated = (spotifySession) => {
  if (spotifySession.hasOwnProperty('accessToken')) {
    return spotifySession.accessToken !== null;
  }

  return false;
};

export const doSpotifyAuthenticatedCheck = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: () => '/do-spotify-authenticate',

  // Determine if the user is authenticated or not  
  authenticatedSelector: state => isSpotifyAuthenticated(state.spotifySession),

  // A nice display name for this check
  wrapperDisplayName: 'UserIsSpotifyAuthenticated'
})


