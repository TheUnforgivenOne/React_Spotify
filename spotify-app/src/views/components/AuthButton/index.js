import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { authEndpoint, clientId, redirectUri } from "../../../constants/authConstants";
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
      {token ? <p>Success login</p> : <a href={spotifyAuthUri}>Auth Spotify</a>}
    </>
  );
};

export default AuthButton;
