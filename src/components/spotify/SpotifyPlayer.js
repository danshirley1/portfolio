import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';

function authenticate(query, cb) {

  // TODO: figure out how to point to port 3001...

  return fetch(`http://localhost:3001/api/spotify-authenticate?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

class SpotifyPlayer extends Component {
  render() {
    return (
      <div>
        <p>THIS IS THE PLAYER MARKUP</p>
        
        <a href="/spotify-profiles">
          THIS IS THE LINK VERSION!
        </a>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  doAuthenticate: authenticate,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(SpotifyPlayer);
