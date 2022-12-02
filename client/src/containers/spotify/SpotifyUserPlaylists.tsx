import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import gql from 'graphql-tag';
import { Query, QueryResult } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import { selectSpotifySession } from '../../reducers/spotify/spotify.selectors';
import { State } from '../../store/root-reducer.types';
import { GET_SPOTIFY_PROFILES_USER_DATA } from '../../graphql/queries/spotify';
import SpotifyUserPlaylistsView from '../../components/spotify/SpotifyUserPlaylists';

interface UserArtist {}; // TODO move out in to a library

interface SpotifySession {
  accessToken: string,
  userArtists: UserArtist[],
}; // TODO move out in to a library

interface Props {
  spotifySession: SpotifySession,
};

export const Component: React.FC<ComponentProps> = ({
  spotifySession
}) => {
  const { accessToken } = spotifySession;

  return (
    <Query query={gql(GET_SPOTIFY_PROFILES_USER_DATA)} variables={{ accessToken }}>
      {({ loading, error, data }: QueryResult): JSX.Element => {
        if (loading) {
          return <span>'Loading...'</span>;
        }

        if (error) {
          if (error.graphQLErrors.find(err => err.name === 'SpotifyUnauthenticatedError')) {
            return <Redirect to="/auth-hub" />;
          }

          return <span>'Error!'</span>;
        }

        return (
          <SpotifyUserPlaylistsView
            user={data.visitingSpotifyUser} /// TODO
            userPlaylists={data.visitingSpotifyUserPlaylists} /// TODO
          />
        );
      }}
    </Query>
  );
};

const mapStateToProps = (state: State) => ({
  spotifySession: selectSpotifySession(state),
});

const connector = connect(mapStateToProps);
type ComponentProps = ConnectedProps<typeof connector>;

export default connector(Component);