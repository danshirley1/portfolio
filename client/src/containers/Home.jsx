import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

const Home = () => (
  <Grid container>
    <Grid item>
      <Button variant="contained" color="primary" component={Link} to="/spotify-profiles">
        Spotify Profiles!
      </Button>
    </Grid>
  </Grid>
);

export default Home;
