import React from 'react';

const AuthHub = (props) => {
  const { onAuthorize } = props;

  return (
    <div>
      <h1>AUTH HUB</h1>
      <button onClick={onAuthorize}>LOGIN TO SPOTIFY</button>
      <br />
      <br />
    </div>
  );
};

export default AuthHub;
