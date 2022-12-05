import React from 'react';
import { connect } from 'react-redux';

import { authorizeSpotifyUser } from '../../store/spotify/spotify.actions';
import AuthHubView from '../../components/authentication/AuthHub';

const AuthHub = props => <AuthHubView onAuthorize={props.authorizeSpotifyUser} />;

// TODO - do something with the redirect query param being passed through (http://localhost:3000/auth-hub?redirect=%2Fspotify-profiles)
// alternatively scrap that, it might be better to have the user redirected to the 'auth success' to be fair.

export default connect(null, { authorizeSpotifyUser })(AuthHub);
