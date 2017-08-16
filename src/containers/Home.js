import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function doIncrementCounter(e) {
  e.preventDefault();
  alert('The link was clicked');
}

class Home extends Component {
  constructor(props) {
    super(props)
  }

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
                    <Button bsStyle="primary" onClick={this.props.changePage}>Go to About page</Button>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)