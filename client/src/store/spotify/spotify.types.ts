export const SpotifyActionTypes = {
  REHYDRATE: 'REHYDRATE',
  SPOTIFY_TOKENS: 'SPOTIFY_TOKENS',
  SET_USER_ARTISTS: 'SET_USER_ARTISTS',
  AUTHORIZE_SPOTIFY_USER: 'AUTHORIZE_SPOTIFY_USER',
} as const;

export interface iSpotifyState {
  accessToken: string | null,
  refreshToken: string | null,
  visitingUser: {
    loading: boolean,
  },
  myUser: {
    loading: boolean,
  },
  userArtists: {
    visitingUserTopArtists: any[],
    myUserTopArtists: any[],
  } | null, // TODO
}

export interface iSetTokensAction {
  type: typeof SpotifyActionTypes.SPOTIFY_TOKENS;
  payload: iSpotifyState;
}

export interface iAuthorizeSpotifyUserAction {
  type: typeof SpotifyActionTypes.AUTHORIZE_SPOTIFY_USER;
}

export interface iSetUserArtistsAction {
  type: typeof SpotifyActionTypes.SET_USER_ARTISTS;
  payload: {
    visitingSpotifyUserPlaylists: any[], // TODO
    mySpotifyUserPlaylists: any[], // TODO
  };
}

/* See: https://www.thecodingwalrus.com/react/using-react-redux-connect-with-typescript/#typing-mapstatetoprops
export type UserActions =
	| SignInSuccessAction
	| SignInFailureAction
	| ...
*/

export type iSpotifyActions =
  | iSetTokensAction
  | iAuthorizeSpotifyUserAction
  | iSetUserArtistsAction;
