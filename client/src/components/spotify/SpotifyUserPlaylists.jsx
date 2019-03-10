import React, { Fragment } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import UserSummary from './UserSummary';
import UserPlaylistsTable from './UserPlaylistsTable';

function SpotifyUserPlaylists(props) {
  const {
    user,
    userPlaylists,
  } = props;

  return (
    <Fragment>
      <Grid container spacing={24}>

        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6">
              You
            </Typography>
            <UserSummary user={user} showPlaylists={false} />
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper>
            <Typography variant="h6" gutterBottom>
              User playlists
            </Typography>
            <UserPlaylistsTable playlists={userPlaylists} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default SpotifyUserPlaylists;
