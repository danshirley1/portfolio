/**
 * Shows info about logged in Spotify user (visitor) and (if user logged in)
 * info about 'my' spotify account. If visiting user did not authentiate
 * maybe show what I can from 'my' account (using spotify 'implicit grant')
 * API calls.
 */

import React from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SpotifyProfiles from '../../components/spotify/SpotifyProfiles';


const GET_VISITING_USER = gql`
  query getVisitingUser {
    spotifyUser(accessToken: "BQA0ZUGU6zW8DZ_t27o9zVf0k8bm1FFD22DjEiGuF-yeafpf7NjP-L-YstVeFBv2qvgGBstdsSg3GFaieFSnTpSBZ62vfkjrCj8YO4nGn0q3mHeHbuZMtPh3y9eea61CDurlmZbnO5ACYxE8LlwyOV733Zu-yQ58e_qqiJY") {
      display_name
      external_urls { spotify }
      images { url }
    }
  }
`;

function SpotifyProfilesContainer(props) {
  // const { spotifySession } = props;
  // const { visitingUser, myUser } = spotifySession;

  return (
    <Query query={GET_VISITING_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        console.log('GRAPHQL QUERY RESULT:', data);

        return (
          <SpotifyProfiles visitingUser={data.spotifyUser} myUser={null} />
        );
      }}
    </Query>
  );

  /*
  return (
    <SpotifyProfiles visitingUser={visitingUser} myUser={myUser} />
  );
  */

  /*
  return (
    <Query query={GET_HELLO}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        console.log('GGGGG:', data);

        return (
          <SpotifyProfiles visitingUser={visitingUser} myUser={myUser} />
        );
      }}
    </Query>
  );
  */
}

export default connect(
  state => ({
    spotifySession: state.spotifySession,
  }),
  null,
)(SpotifyProfilesContainer);
