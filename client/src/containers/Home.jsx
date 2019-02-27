import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';

const Home = () => (
  <Grid container justify="center">
    <Grid item sm={6} md={5} lg={4}>
      <Paper>
        <Typography variant="h6" component="h2" gutterBottom>
          WELCOME
        </Typography>
        <Typography paragraph>
          This app will reveal my Spotify tracks and show you what we have in common!
        </Typography>
        <Typography paragraph>
          You'll be asked to login to your Spotify account - I don't store any of the information you enter, ever.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/spotify-profiles">
          LET'S GO!
        </Button>
      </Paper>
    </Grid>
  </Grid>
);

export default Home;
