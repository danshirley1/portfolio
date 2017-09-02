import { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserInfo,
  getMyInfo,
  setTokens,
} from '../../actions/spotify/';

class SpotifyAuthenticated extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    const {params} = this.props.match;
    const {accessToken, refreshToken} = params;

    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getUserInfo());
    dispatch(getMyInfo());

    this.props.history.replace('/spotify-profiles');
  }

  render() {
    return null
  }
}

export default connect()(SpotifyAuthenticated);
