import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../components/Counter'

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

                    <div>
                      <Button
                        bsStyle="primary"
                        onClick={this.props.increment}
                        disabled={this.props.isIncrementing}>
                        Increment counter
                      </Button>
                    </div>

                    <div>
                      <Button
                        bsStyle="primary"
                        onClick={this.props.incrementAsync}
                        disabled={this.props.isIncrementing}>
                        Increment counter (async)
                      </Button>
                    </div>

                  </div>
                </Col>
                <Col xs={6}>
                  <div className="content-container">
                    {this.props.count}
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

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)
