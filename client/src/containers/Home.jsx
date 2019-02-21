import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

const Home = () => (
  <Grid container>
    <Grid item>
      <Button component={Link} to="/spotify-profiles" color="primary">
        Spotify Profiles!222
      </Button>
    </Grid>
  </Grid>
);

export default Home;
