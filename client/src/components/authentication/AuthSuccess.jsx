import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';

const AuthSuccess = () => (
  <Grid container justify="center">
    <Grid item sm={6} md={5} lg={4}>
      <div className="space-content-vertical">
        <Paper>
          <Typography variant="h6" component="h2" gutterBottom>
            AUTHORISATION SUCCESS
          </Typography>
          <Typography paragraph>
            Thanks! Now let's see what we have in common.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/spotify-profiles">
            LET'S GO!
          </Button>
        </Paper>
      </div>
    </Grid>
  </Grid>
);

export default AuthSuccess;
