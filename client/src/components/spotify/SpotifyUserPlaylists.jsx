import React, { Fragment } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import UserSummaryWide from './UserSummaryWide';
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
            <UserSummaryWide user={user} showPlaylistsLink={false} playlists={userPlaylists} />
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
