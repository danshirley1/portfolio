import React from 'react';
import { connect } from 'react-redux';

import { authorizeSpotifyUser } from '../../actions/spotify/';
import AuthHubView from '../../components/authentication/AuthHub';

const AuthHub = props => <AuthHubView onAuthorize={props.authorizeSpotifyUser} />;

export default connect(null, { authorizeSpotifyUser })(AuthHub);
