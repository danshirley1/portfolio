import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SpotifyPlayer from '../components/spotify/SpotifyPlayer';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>              
              <div className="content-container">
                <Button bsStyle="primary" onClick={this.props.changePage}>Go to About page</Button>
              </div>
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)
