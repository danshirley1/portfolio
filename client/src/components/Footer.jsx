import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
// import { Restore as RestoreIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  footerBar: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

function Footer({ classes }) {
  return (
    <Grid spacing={0} container fluid justify="center" className={classes.footerBar}>
      <Grid item>
        <Typography variant="caption">
          &copy; Dan Shirley 2019
        </Typography>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
