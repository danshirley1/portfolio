import React from 'react';

import UserSummary from './UserSummary';

function SpotifyProfiles(props) {
  const { visitingUser, myUser } = props;

  return (
    <div>
      <h1>Visiting User</h1>
      <UserSummary user={visitingUser} />
  
      <h1>Me User</h1>
      <UserSummary user={myUser} />
    </div>
  );
}

export default SpotifyProfiles;
