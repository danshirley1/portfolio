import { createSelector } from 'reselect';
import { Selector } from 'react-redux';
import { State } from '../../store/root-reducer.types';
import { iSpotifyState } from './spotify.types';

const select: Selector<State, iSpotifyState> = (state) => state.spotifySession;

export const selectSpotifySession = createSelector(
   [select],
   (spotifySession) => spotifySession,
);
