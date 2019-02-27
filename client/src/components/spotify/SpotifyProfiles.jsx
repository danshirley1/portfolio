import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import UserSummary from './UserSummary';

function SpotifyProfiles(props) {
  const {
    visitingUser,
    myUser,
    visitingUserPlaylists,
    myUserPlaylists,
  } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper>
          <Typography variant="h6" component="h2">
            You
          </Typography>
          <UserSummary user={visitingUser} playlists={visitingUserPlaylists} />
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper>
          <Typography variant="h6" component="h2">
            Me
          </Typography>
          <UserSummary user={myUser} playlists={myUserPlaylists} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SpotifyProfiles;
