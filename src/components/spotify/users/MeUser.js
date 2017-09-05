import React, { Component } from 'react';
import {} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {} from '../../../actions/spotify/';

class MeUser extends Component {
  render() {
    const imageUrl =
      this.props.user.images[0] ? this.props.user.images[0].url : '';

    // if we're still loading, indicate such
    if (this.props.user.loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <h1>
          My User Component
        </h1>

        {this.props.user.id !== null &&
          <div className="user">
            <h2>{`My user is ${this.props.user.display_name}`}</h2>
            <div className="user-content">
              <img src={imageUrl} alt='User avatar' />
              <ul>
                <li>
                  <span>Display name</span>
                  <span>{this.props.user.display_name}</span>
                </li>
                <li>
                  <span>Id</span>
                  <span>{this.props.user.id}</span>
                </li>
                <li>
                  <span>Email</span>
                  <span>{this.props.user.email}</span>
                </li>
                <li>
                  <span>Spotify URI</span>
                  <span>
                    <a href={this.props.user.external_urls.spotify}>
                      {this.props.user.external_urls.spotify}
                    </a>
                  </span>
                </li>
                <li>
                  <span>Link</span>
                  <span>
                    <a href={this.props.user.href}>
                      {this.props.user.href}
                    </a>
                  </span>
                </li>
                <li>
                  <span>Profile Image</span><span>
                  <a href={this.props.user.imageUrl}>
                    {this.props.user.imageUrl}
                  </a>
                  </span>
                </li>
                <li>
                  <span>Country</span>
                  <span>
                    {this.props.user.country}
                  </span>
                </li>
                <li>
                  <span>Product</span>
                  <span>{this.props.user.product}</span>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MeUser);