import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

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
        <h1>Visiting User</h1>
        <UserSummary user={visitingUser} playlists={visitingUserPlaylists} />
      </Grid>

      <Grid item xs={6}>
        <h1>Me User</h1>
        <UserSummary user={myUser} playlists={myUserPlaylists} />
      </Grid>
    </Grid>
  );
}

export default SpotifyProfiles;
