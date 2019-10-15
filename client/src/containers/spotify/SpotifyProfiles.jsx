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
import GET_SPOTIFY_PROFILES_USER_DATA from '../../graphql/queries/spotify';

import { setCommonalityResults } from '../../actions/spotify';

export function SpotifyProfiles(props) {
  const { spotifySession, onSetCommonalityResults } = props;
  const { accessToken, commonalityResults } = spotifySession;

  const doSetCommonalityResults = ({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists }) => {
    onSetCommonalityResults({ visitingSpotifyUserPlaylists, mySpotifyUserPlaylists });
  };

  return (
    <Query query={gql(GET_SPOTIFY_PROFILES_USER_DATA)} variables={{ accessToken }} onCompleted={doSetCommonalityResults}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...';
        }

        if (error) {
          if (error.graphQLErrors.find(err => err.name === 'SpotifyUnauthenticatedError')) {
            return <Redirect to="/auth-hub" />;
          }

          return 'Unhandled error!';
        }

        return (
          <SpotifyProfilesView
            visitingUser={data.visitingSpotifyUser}
            myUser={data.mySpotifyUser}
            visitingUserPlaylists={data.visitingSpotifyUserPlaylists}
            myUserPlaylists={data.mySpotifyUserPlaylists}
            commonalityResults={commonalityResults}
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
  { onSetCommonalityResults: setCommonalityResults },
)(SpotifyProfiles);
