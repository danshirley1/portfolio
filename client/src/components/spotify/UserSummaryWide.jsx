import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

function UserSummaryWide(props) {
  const {
    user,
    playlists,
    showPlaylists = true,
  } = props;

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h5" data-test="summary-display-name-header">
            {`${user.display_name}`}
          </Typography>
          <Grid item xs>
            <Typography variant="body1">
              Spotify URI
            </Typography>
            <Typography variant="body2">
              <a data-test="summary-spotify-uri" href={user.external_urls.spotify}>
                {user.external_urls.spotify}
              </a>
            </Typography>
            {showPlaylists &&
              (
                <Fragment>
                  <Typography variant="body1">
                    Playlists
                  </Typography>
                  <Typography variant="body2">
                    User has&nbsp;
                    <span data-test="playlists-length">{ playlists.length }</span>
                    &nbsp;playlists.&nbsp;
                    <Link to="/spotify-user-playlists">View playlists</Link>
                  </Typography>
                </Fragment>
              )
            }
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <img data-test="summary-user-avatar" src={user.profileImage.url} alt="User avatar" width="100%" />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default UserSummaryWide;


/*
import { Grid, Paper, Typography } from '@material-ui/core';
<Fragment>
  <Grid container spacing={24}>

    <Grid item xs={12}>
      <Paper>
        <Typography variant="h6">
          You
        </Typography>
        <UserSummaryWide user={user} showPlaylists={false} />
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
*/
