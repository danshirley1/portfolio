/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'

import MeUser from '../../components/spotify/users/MeUser';
import VisitingUser from '../../components/spotify/users/VisitingUser';

class UsersSpotifyProfiles extends Component {
  componentDidUpdate() {
    const { user } = this.props.spotifySession;

    if (!user.loading) {
      if (user.id === null) {
        return window.location ='http://localhost:3001/api/spotify-authenticate';
      }
    }
  }

  render() {
    const visitingUser = this.props.spotifySession.user;

    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h3>Visiting User</h3>
            <VisitingUser user={visitingUser} />
          </Col>
          <Col xs={6}>
            <h3>Me User</h3>
            <VisitingUser user={visitingUser} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  spotifySession: state.spotifySession
})

export default connect(
  mapStateToProps,
)(UsersSpotifyProfiles);
