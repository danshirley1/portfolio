import { Component } from 'react';
import { connect } from 'react-redux';

import { isSpotifyAuthenticated } from '../../containers/spotify/SpotifyAuth';

import {
  getUserInfo,
  getMyInfo,
  setTokens,
} from '../../actions/spotify/';

class SpotifyAuthenticated extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    const {params} = this.props.match;
    const {accessToken, refreshToken} = params;

    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getUserInfo());
    dispatch(getMyInfo());
  }

  componentWillReceiveProps() {
    if (isSpotifyAuthenticated(this.props.spotifySession)) {
      this.props.history.replace('/spotify-profiles');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  spotifySession: state.spotifySession
})

export default connect(
  mapStateToProps,
  null
)(SpotifyAuthenticated);
