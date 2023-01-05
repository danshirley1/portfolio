import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  footerBar: {
    position: 'absolute' as 'absolute',
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

interface Props {
  classes: any,
};

interface State {};

class Footer extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <Grid spacing={0} container justifyContent="center" className={classes.footerBar}>
        <Grid item>
          <Typography variant="caption">
            &copy; Dan Shirley 2019
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
