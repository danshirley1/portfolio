import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

import UserSummary from './UserSummary';
import CommonalityResults from './CommonalityResults';

function SpotifyProfiles(props) {
  const {
    visitingUser,
    myUser,
    visitingUserPlaylists,
    myUserPlaylists,
    commonalityResults,
  } = props;

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" component="h2">
            Results!
          </Typography>
          <CommonalityResults commonality={commonalityResults} />
        </Paper>
      </Grid>

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
