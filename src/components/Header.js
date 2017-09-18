import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Dan Shirley [developer]</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <IndexLinkContainer to="/">
              <NavItem eventKey={1} href="#">Home</NavItem>
            </IndexLinkContainer>

            <LinkContainer to="/about">
              <NavItem eventKey={2} href="#">About</NavItem>
            </LinkContainer>

            <LinkContainer to="/portfolio">
              <NavItem eventKey={3} href="#">Portfolio</NavItem>
            </LinkContainer>

            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      
    );
  }
}

export default Header;