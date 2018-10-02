/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import SpotifyProfilesView from '../../components/spotify/SpotifyProfiles';
import GET_VISITING_AND_MY_SPOTIFY_USER from '../../graphql/queries/spotify';

export function SpotifyProfiles(props) {
  const { spotifySession } = props;
  const { accessToken } = spotifySession;

  return (
    <Query query={gql(GET_VISITING_AND_MY_SPOTIFY_USER)} variables={{ accessToken }}>
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
          <SpotifyProfilesView visitingUser={data.visitingSpotifyUser} myUser={data.mySpotifyUser} />
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
)(SpotifyProfiles);
