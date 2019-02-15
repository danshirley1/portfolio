import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  appBar: {
    // zIndex: theme.zIndex.modal + 1,
  },
  drawerPaper: {
    paddingTop: 20, // todo: use default-spacing class when available
    width: 240,
  },
});

class Menu extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  logout = () => {
    window.location.replace('/whp/logout');
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { classes } = this.props;

    return (
      <div>  {/* TODO use Fragment */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            {this.state.open ?
              <IconButton
                data-test="menu-btn"
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <CloseIcon data-test="menu-nav-close" />
              </IconButton>
              :
              <IconButton
                data-test="menu-bth"
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <MenuIcon data-test="menu-nav-open" />
              </IconButton>
            }

            <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
              PORTFOLIO APP
            </Typography>

            <Drawer
              open={this.state.open}
              onBackdropClick={this.handleToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <NavLink
                to="/"
                onClick={() => this.handleToggle()}
                data-test="TODO"
              >
                <MenuItem>Home</MenuItem>
              </NavLink>
              <NavLink
                to="/spotify-profiles"
                onClick={() => this.handleToggle()}
                data-test="TODO"
              >
                <MenuItem>Spotify Profiles</MenuItem>
              </NavLink>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
