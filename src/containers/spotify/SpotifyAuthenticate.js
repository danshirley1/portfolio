import { Component } from 'react';
import { connect } from 'react-redux';

class SpotifyAuthenticate extends Component {
  componentDidMount() {
    window.location = 'http://localhost:3001/api/spotify-authenticate';
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
)(SpotifyAuthenticate);
