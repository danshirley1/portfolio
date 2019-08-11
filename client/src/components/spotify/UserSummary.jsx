import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  'avatar-image': {
    width: '100%',
  },
});

function UserSummary(props) {
  const {
    classes,
    user,
    playlists,
    showPlaylists = true,
  } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={8}>
        <Typography component="h5" variant="h5">
          {`${user.display_name}`}
        </Typography>
        {showPlaylists && (
          <Box mt={2}>
            <Typography paragraph>
              Playlists&nbsp;
              { `(${playlists.length})` }
              &nbsp;
              <Link to="/spotify-user-playlists" component={RouterLink}>view</Link>
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item xs={4}>
        <img src={user.profileImage.url} alt="Profile avatar" className={classes['avatar-image']} />
      </Grid>
    </Grid>
  );
}

UserSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSummary);
