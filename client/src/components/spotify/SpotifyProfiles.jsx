import React, { Fragment } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import { Redirect } from 'react-router-dom';

import { GET_SPOTIFY_PROFILES_USER_DATA } from '../../graphql/queries/spotify';
import UserSummary from './UserSummary';
import CommonalityResults from './CommonalityResults';

function SpotifyProfiles(props) {
  const {
    accessToken,
    userArtists,
    doProfilesDataLoaded,
  } = props;

  return (
    <Grid container spacing={10}>
      <Query query={gql(GET_SPOTIFY_PROFILES_USER_DATA)} variables={{ accessToken }} onCompleted={doProfilesDataLoaded}>
        {({ loading, error, data }) => {
          if (loading) {
            return 'Loading...';
          }

          if (error) {
            if (error.graphQLErrors.find((err) => err.name === 'SpotifyUnauthenticatedError')) {
              return <Redirect to="/auth-hub" />;
            }

            return 'Unhandled error!';
          }

          return (
            <Fragment>
              <Grid item xs={12}>
                <Paper>
                  <Typography variant="h6" component="h2">
                    Results!
                  </Typography>
                  { userArtists &&
                    <CommonalityResults userArtists={userArtists} />
                  }
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper>
                  <Typography variant="h6" component="h2">
                    You
                  </Typography>
                  <UserSummary user={data.visitingSpotifyUser} playlists={data.visitingSpotifyUserPlaylists} />
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper>
                  <Typography variant="h6" component="h2">
                    Me
                  </Typography>
                  <UserSummary user={data.mySpotifyUser} playlists={data.mySpotifyUserPlaylists} />
                </Paper>
              </Grid>
            </Fragment>
          );
        }
      }
      </Query>
    </Grid>
  );
}

export default SpotifyProfiles;
