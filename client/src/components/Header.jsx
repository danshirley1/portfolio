import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';

import {
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Drawer,
  MenuItem,
} from '@material-ui/core';

import {
  Close as CloseIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

const styles = () => ({
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

  handleToggle = () => this.setState(state => ({ open: !state.open }));

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <AppBar>
        <Toolbar>
          {open
            ? (
              <IconButton
                data-test="menu-btn"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <CloseIcon data-test="menu-nav-close" />
              </IconButton>
            )
            : (
              <IconButton
                data-test="menu-bth"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <MenuIcon data-test="menu-nav-open" />
              </IconButton>
            )
          }

          <Typography variant="h6" component="h1" style={{ flex: 1 }}>
            PORTFOLIO APP
          </Typography>

          <Drawer
            open={open}
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
    );
  }
}

export default withStyles(styles)(Menu);
