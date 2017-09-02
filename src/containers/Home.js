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

import SpotifyPlayer from '../components/spotify/SpotifyPlayer';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
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

          <Row>
            <Col xs={12}>
              <h2>Spotify Player</h2>
              <SpotifyPlayer />
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
