import { Component } from 'react';
import { connect } from 'react-redux';

import isSpotifyAuthenticated from '../../utils/auth/spotify';

import {
//  getUserInfo,
//  getMyInfo,
  setTokens,
} from '../../actions/spotify/';

class SpotifyAuthenticated extends Component {
  componentWillMount() {
    const { match, setTokens, getUserInfo, getMyInfo } = this.props;
    const { accessToken, refreshToken } = match.params;

    console.log('AAAA', match.params);

    setTokens({ accessToken, refreshToken });
//    getUserInfo(); // TODO: invoke this on arrival at spotify-profiles (use a spinner there?)
//    getMyInfo(); // TODO: invoke this on arrival at spotify-profiles (use a spinner there?)
  }

  componentDidUpdate() {
    if (isSpotifyAuthenticated(this.props.spotifySession)) {
      this.props.history.replace('/spotify-profiles');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  spotifySession: state.spotifySession,
});

export default connect(
  mapStateToProps,
  {
    setTokens,
//    getUserInfo,
//    getMyInfo
  },
)(SpotifyAuthenticated);
