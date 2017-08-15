import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col} from 'react-bootstrap';

const navInstance = (
  <Nav bsStyle="pills" activeKey={1} onSelect="">
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
);

class App extends Component {
  render() {
    return (
      <div>
        {/* Navigation */}
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>        

        {/* Page Content */}
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Row>
                <Col xs={6}>
                  <div className="content-container">
                    6 col (1 of 2)
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="content-container">
                    6 col (2 of 2)
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>

        {/* Footer */}
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;