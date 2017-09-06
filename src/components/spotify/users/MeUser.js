import React, { Component } from 'react';
import {} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {} from '../../../actions/spotify/';

class MeUser extends Component {
  render() {
    const user = this.props.user;

    // if we're still loading, indicate such
    if (user.loading) {
      return <h2>Loading...</h2>;
    } else if (!user.hasOwnProperty('profileData')) {
      return null;
    } else {
      const imageUrl = user.profileData.images[0]
        ? user.profileData.images[0].url
        : '';

      return (
        <div>
          <h1>
            My User Component
          </h1>

          {user.profileData &&
            <div className="user">
              <h2>{`My user is ${user.profileData.display_name}`}</h2>
              <div className="user-content">
                <img src={imageUrl} alt='User avatar' />
                <ul>
                  <li>
                    <span>Display name</span>
                    <span>{user.profileData.display_name}</span>
                  </li>
                  <li>
                    <span>Id</span>
                    <span>{user.profileData.id}</span>
                  </li>
                  <li>
                    <span>Email</span>
                    <span>{user.profileData.email}</span>
                  </li>
                  <li>
                    <span>Spotify URI</span>
                    <span>
                      <a href={user.profileData.external_urls.spotify}>
                        {user.profileData.external_urls.spotify}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Link</span>
                    <span>
                      <a href={user.profileData.href}>
                        {user.profileData.href}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Profile Image</span><span>
                    <a href={user.profileData.imageUrl}>
                      {user.profileData.imageUrl}
                    </a>
                    </span>
                  </li>
                  <li>
                    <span>Country</span>
                    <span>
                      {user.profileData.country}
                    </span>
                  </li>
                  <li>
                    <span>Product</span>
                    <span>{user.profileData.product}</span>
                  </li>
                </ul>
              </div>
              <div>
                {JSON.stringify(user.playlistData)}
              </div>
            </div>
          }
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MeUser);