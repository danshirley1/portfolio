import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import MeUser from './MeUser';
import VisitingUser from './VisitingUser';

function SpotifyProfiles ({ visitingUser, myUser }: props) {
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

export default SpotifyProfiles;