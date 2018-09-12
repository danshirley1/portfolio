import React from 'react';

function VisitingUser(props) {
  const { user } = props;

  const imageUrl = user.images[0] ? user.images[0].url : '';

  return (
    <div>
      <h1>
        Visiting User Component
      </h1>

      <div className="user">
        <h2>{`Logged in as ${user.display_name}`}</h2>
        <div className="user-content">
          <img src={imageUrl} alt="User avatar" />
          <ul>
            <li>
              <span>Display name</span>
              <span>{user.display_name}</span>
            </li>
            <li>
              <span>Id</span>
              <span>{user.id}</span>
            </li>
            <li>
              <span>Email</span>
              <span>{user.email}</span>
            </li>
            <li>
              <span>Spotify URI</span>
              <span>
                <a href={user.external_urls.spotify}>
                  {user.external_urls.spotify}
                </a>
              </span>
            </li>
            <li>
              <span>Link</span>
              <span>
                <a href={user.href}>
                  {user.href}
                </a>
              </span>
            </li>
            <li>
              <span>Profile Image</span>
              <span>
                <a href={user.imageUrl}>
                  {user.imageUrl}
                </a>
              </span>
            </li>
            <li>
              <span>Country</span>
              <span>
                {user.country}
              </span>
            </li>
            <li>
              <span>Product</span>
              <span>{user.product}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisitingUser;
