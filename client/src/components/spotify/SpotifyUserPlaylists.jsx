import React, { Fragment } from 'react';

import UserSummary from './UserSummary';

function SpotifyUserPlaylists(props) {
  const {
    user,
    userPlaylists,
  } = props;

  return (
    <div>
      <UserSummary user={user} playlists={userPlaylists}/>

      <h1>PLAYLISTS TABLE:</h1>

      <table cellSpacing="20">
        <thead align="left">
          <tr>
            <th>Playlist Name</th>
            <th>Track Count</th>
            <th>Tracks</th>
          </tr>
        </thead>
        <tbody>
          {userPlaylists.map(row => (
            <tr vAlign="top">
              <td>{row.name}</td>
              <td>{row.tracks.length}</td>
              <td>
                {row.tracks.map(track => (
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {track.name}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpotifyUserPlaylists;
