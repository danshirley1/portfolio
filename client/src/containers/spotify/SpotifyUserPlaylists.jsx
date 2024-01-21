import React from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import SpotifyUserPlaylistsView from '../../components/spotify/SpotifyUserPlaylists';
import { GET_SPOTIFY_PROFILES_USER_DATA } from '../../graphql/queries/spotify';

export function SpotifyUserPlaylists(props) {
  const { spotifySession } = props;
  const { accessToken } = spotifySession;

  return (
    <Query query={gql(GET_SPOTIFY_PROFILES_USER_DATA)} variables={{ accessToken }}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...';
        }

        if (error) {
          if (error.graphQLErrors.find(err => err.name === 'SpotifyUnauthenticatedError')) {
            return <Redirect to="/auth-hub" />;
          }

          return 'Error!';
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
}

export default connect(
  state => ({
    spotifySession: state.spotifySession,
  }),
  null,
)(SpotifyUserPlaylists);
