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
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>  {/* TODO use Fragment */}
        YO
      </div>
    );
  }
}

export default Header;
