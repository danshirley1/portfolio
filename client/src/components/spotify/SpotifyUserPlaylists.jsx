import React from 'react';

import UserSummary from './UserSummary';

function SpotifyUserPlaylists(props) {
  const {
    user,
    userPlaylists,
  } = props;

  return (
    <div>
      <UserSummary user={user} playlists={userPlaylists}/>

      {userPlaylists}

      <h1>PLAYLISTS TABLE:</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Track Count</th>
          </tr>
        </thead>
        <tbody>
          {userPlaylists.map(row => {
            <tr>
              <td>{row.name}</td>
              <td>{row.tracks.length}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SpotifyUserPlaylists;
