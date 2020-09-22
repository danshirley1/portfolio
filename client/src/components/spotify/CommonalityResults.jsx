import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

function CommonalityResults(props) {
  const { commonality } = props;

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" component="h2">
            here!
          </Typography>
          <div style={{ color: 'white' }}>
            visitingUserTopArtists:<br />
            { commonality ? JSON.stringify(commonality.visitingUserTopArtists) : 'Nothing to show' }
          </div>
          <br />
          <div style={{ color: 'white' }}>
            myUserTopArtists:<br />
            { commonality ? JSON.stringify(commonality.myUserTopArtists) : 'Nothing to show' }
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CommonalityResults;
