import React, { Fragment } from 'react';

import {
  Grid,
  Paper,
  Typography,
  Link,
  Button,
} from '@material-ui/core';

import UserSummaryWide from './UserSummaryWide';
import UserPlaylistsTable from './UserPlaylistsTable';

function SpotifyUserPlaylists(props) {
  const {
    user,
    userPlaylists,
  } = props;

  return (
    <Fragment>
      <Grid container spacing={10}>

        <Grid item xs={12}>
          <Paper>
            <UserSummaryWide user={user} showPlaylistsLink={false} playlists={userPlaylists}>
              <Button variant="contained" color="secondary" component={Link} to="/spotify-profiles">
                TEXT HERE
              </Button>
            </UserSummaryWide>
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
