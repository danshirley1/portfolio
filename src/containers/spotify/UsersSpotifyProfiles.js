/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import MeUser from '../../components/spotify/users/MeUser';
import VisitingUser from '../../components/spotify/users/VisitingUser';

class UsersSpotifyProfiles extends Component {
  render() {
    const { visitingUser, myUser } = this.props.spotifySession;

    if (!visitingUser.hasOwnProperty('profileData')) {
      return null;
    }

    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <h3>Visiting User</h3>
            <VisitingUser user={visitingUser} />
          </Col>
          <Col xs={6}>
            <h3>Me User</h3>
            <MeUser user={myUser} />
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
  null
)(UsersSpotifyProfiles);
