import React from 'react';

// import MeUser from './MeUser';
// import VisitingUser from './VisitingUser';

function SpotifyProfiles (props) {
  const { visitingUser, myUser } = props;

  if (!visitingUser.profileData) {
    return null;
  }

  return (
    <div>
      <h3>Visiting User</h3>
      TODO
      <h3>Me User</h3>
      TODO
    </div>
  );
}

export default SpotifyProfiles;