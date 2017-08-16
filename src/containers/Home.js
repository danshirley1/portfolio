import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

function doIncrementCounter(e) {
  e.preventDefault();
  alert('The link was clicked');
}

class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;