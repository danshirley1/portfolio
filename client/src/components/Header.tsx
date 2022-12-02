import React from 'react';
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

interface Props {
  classes: any,
};

interface State {
  isOpen: boolean,
};

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isOpen: false };
  }

  logout = () => {
    window.location.replace('/whp/logout');
  };

  handleToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <AppBar>
        <Toolbar>
          {isOpen
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
            open={isOpen}
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

export default withStyles(styles)(Header);
