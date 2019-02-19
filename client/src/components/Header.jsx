import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';

import {
  Close as CloseIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

import {
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Drawer,
  MenuItem,
} from '@material-ui/core';

const styles = () => ({
  appBar: {
    // zIndex: theme.zIndex.modal + 1,
  },
  drawerPaper: {
    paddingTop: 20, // todo: use default-spacing class when available
    width: 240,
  },
});

class Header extends React.Component {
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

export default withStyles(styles)(Header);
