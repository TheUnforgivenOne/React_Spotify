import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { authEndpoint, clientId, redirectUri } from "../../../config/authConstants";
import { getHash } from './utils'

const AuthButton = () => {
  const [token, setToken] = useState();
  const history = useHistory();

  const spotifyAuthUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

  const redirectToSpotifyAuth = () => {
    const spotifyAuthUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
    history.push(spotifyAuthUri);
  };

  useEffect(() => {
    const hash = getHash();
    hash && setToken(hash.access_token);
  }, [token]);

  return (
    <>
      <a href={spotifyAuthUri}>Auth Spotify</a>
      {token ? <p>Success login</p> : <p>You are not logged in</p>}
      {/*<button onClick={redirectToSpotifyAuth}>Auth Spotify</button>*/}
    </>
  );
};

export default AuthButton;
