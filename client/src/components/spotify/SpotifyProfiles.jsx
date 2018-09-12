import React from 'react';

// import MeUser from './MeUser';
import VisitingUser from './VisitingUser';

function SpotifyProfiles(props) {
  const { visitingUser, myUser } = props;

  return (
    <div>
      <h3>Visiting User</h3>
      <VisitingUser user={visitingUser} />
      <h3>Me User</h3>
      TODO
    </div>
  );
}

export default SpotifyProfiles;
