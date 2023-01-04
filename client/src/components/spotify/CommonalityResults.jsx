import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

function CommonalityResults(props) {
  const { userArtists } = props;

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" component="h2">
            here!
          </Typography>
          <div style={{ color: 'white' }}>
            visitingUserTopArtists:
            <br />
            { userArtists ? JSON.stringify(userArtists.visitingUserTopArtists) : 'Nothing to show' }
          </div>
          <br />
          <div style={{ color: 'white' }}>
            myUserTopArtists:
            <br />
            { userArtists ? JSON.stringify(userArtists.myUserTopArtists) : 'Nothing to show' }
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CommonalityResults;
