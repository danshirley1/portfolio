import { Component } from 'react';

class SpotifyAuthenticate extends Component {
  componentDidMount() {
    window.location = 'http://localhost:3001/api/spotify-authenticate';
  }

  render() {
    return null;
  }
}

export default SpotifyAuthenticate;
