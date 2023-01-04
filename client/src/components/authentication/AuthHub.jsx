import React from 'react';

import {
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';

function AuthHub(props) {
  const { onAuthorize } = props;

  return (
    <Grid container justifyContent="center">
      <Grid item sm={6} md={5} lg={4}>
        <div className="space-content-vertical">
          <Paper>
            <Typography variant="h6" component="h2" gutterBottom>
              AUTHORISATION PLEASE
            </Typography>
            <Typography paragraph>
              So I can see your tracks, I need you to securely login to Spotify.
            </Typography>
            <Typography paragraph>
              This is all handled directly with Spotify - I don&apos;t store anything your enter, ever.
            </Typography>
            <Typography paragraph>
              See you in a moment, on your return!
            </Typography>
            <Button variant="contained" color="primary" onClick={onAuthorize}>
              LOGIN TO SPOTIFY
            </Button>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default AuthHub;
