/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'

import {
  testUserLoggedOut
} from '../../actions/spotify/';

class UsersSpotifyProfiles extends Component {
  componentDidUpdate() {
    const { user } = this.props.spotifySession;

    if (!user.loading) {
      if (user.id === null) {
        return window.location ='http://localhost:3001/api/spotify-authenticate';
      }
    }
  }

  render() {
    const { user } = this.props.spotifySession;
    const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    const imageUrl = images[0] ? images[0].url : '';

    // if we're still loading, indicate such
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <div>
          <Button
            bsStyle="primary"
            onClick={this.props.logOutUser}>
            logout user
          </Button>
        </div>

        {user.id !== null &&
          <div className="user">
            <h2>{`Logged in as ${display_name}`}</h2>
            <div className="user-content">
              <img src={imageUrl} />
              <ul>
                <li><span>Display name</span><span>{display_name}</span></li>
                <li><span>Id</span><span>{id}</span></li>
                <li><span>Email</span><span>{email}</span></li>
                <li><span>Spotify URI</span><span><a href={external_urls.spotify}>{external_urls.spotify}</a></span></li>
                <li><span>Link</span><span><a href={href}>{href}</a></span></li>
                <li><span>Profile Image</span><span><a href={imageUrl}>{imageUrl}</a></span></li>
                <li><span>Country</span><span>{country}</span></li>
                <li><span>Product</span><span>{product}</span></li>
              </ul>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logOutUser: testUserLoggedOut
}, dispatch)

const mapStateToProps = state => ({
  spotifySession: state.spotifySession
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersSpotifyProfiles);
