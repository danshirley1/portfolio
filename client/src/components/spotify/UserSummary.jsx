import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

function UserSummary(props) {
  const { user } = props;

  const imageUrl = isEmpty(user.images) ? '' : user.images[0].url;

  return (
    <Fragment>
      <h2 data-test="summary-display-name-header">{`Logged in as ${user.display_name}`}</h2>
      <img data-test="summary-user-avatar" src={imageUrl} alt="User avatar" />
      <dl>
        <dt>
          Spotify URI
        </dt>
        <dd>
          <a data-test="summary-spotify-uri" href={user.external_urls.spotify}>
            {user.external_urls.spotify}
          </a>
        </dd>
      </dl>
    </Fragment>
  );
}

export default UserSummary;
