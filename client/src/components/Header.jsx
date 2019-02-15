import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
});

class Menu extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
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
    const { classes, isAuthenticated } = this.props;

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {this.state.open ?
              <IconButton
                data-test="menu-btn"
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <CloseIcon data-test="menu-nav-close"/>
              </IconButton>
              :
              <IconButton
                data-test="menu-bth"
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <MenuIcon data-test="menu-nav-open"/>
              </IconButton>
            }

            <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
              Hello World
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
