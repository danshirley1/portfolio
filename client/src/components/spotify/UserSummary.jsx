import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function UserSummary(props) {
  const {
    user,
    playlists,
    showPlaylists = true,
  } = props;

  return (
    <Fragment>
      <h2 data-test="summary-display-name-header">{`${user.display_name}`}</h2>
      <img data-test="summary-user-avatar" src={user.profileImage.url} alt="User avatar" />
      <dl>
        <dt>
          Spotify URI
        </dt>
        <dd>
          <a data-test="summary-spotify-uri" href={user.external_urls.spotify}>
            {user.external_urls.spotify}
          </a>
        </dd>
        {showPlaylists &&
          (
            <Fragment>
              <dt>
                Playlists
              </dt>
              <dd>
                User has&nbsp;
                <span data-test="playlists-length">{ playlists.length }</span>
                &nbsp;playlists.
                <Link to="/spotify-user-playlists">View playlists</Link>
              </dd>
            </Fragment>
          )
        }
      </dl>
    </Fragment>
  );
}

export default UserSummary;
