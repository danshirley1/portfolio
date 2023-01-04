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
      <h1>HELLO</h1>
    );
  }
}

export default withStyles(styles)(Header);
