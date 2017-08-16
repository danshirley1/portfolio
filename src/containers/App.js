import React, { Component } from 'react';
import Header from '../components/Header';
import '../assets/styles/css/App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';


function doIncrementCounter(e) {
  e.preventDefault();
  alert('The link was clicked');
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />

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
                    <Button bsStyle="primary" onClick={doIncrementCounter}>Increment counter</Button>
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