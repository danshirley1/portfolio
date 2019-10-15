import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

function CommonalityResults(props) {
  const { commonality } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" component="h2">
            here!
          </Typography>
          <div style={{ color: 'white' }}>
            visitingUserTopArtists:<br />
            { JSON.stringify(commonality.visitingUserTopArtists) }
          </div>
          <br />
          <div style={{ color: 'white' }}>
            myUserTopArtists:<br />
            { JSON.stringify(commonality.myUserTopArtists) }
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CommonalityResults;
