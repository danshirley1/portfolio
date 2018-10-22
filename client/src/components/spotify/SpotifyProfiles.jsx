import React from 'react';

import UserSummary from './UserSummary';

function SpotifyProfiles(props) {
  const {
    visitingUser,
    myUser,
    visitingUserPlaylists,
    myUserPlaylists = [],
  } = props;

  return (
    <div>
      <h1>Visiting User</h1>
      <UserSummary user={visitingUser} playlists={visitingUserPlaylists} />

      <h1>Me User</h1>
      <UserSummary user={myUser} playlists={myUserPlaylists} />
    </div>
  );
}

export default SpotifyProfiles;
