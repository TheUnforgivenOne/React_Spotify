import React from 'react';
import PropTypes from "prop-types";

const TracksItem = (props) => {
  return (
    <p>{props.track.name}</p>
  );
};

TracksItem.propTypes = {
  name: PropTypes.string,
  spotifyLink: PropTypes.string,
  duration: PropTypes.number,
  popularity: PropTypes.number,
  albumName: PropTypes.string,
  albumSpotifyLink: PropTypes.string,
  artistName: PropTypes.string,
  artistSpotifyLink: PropTypes.string,
};

export default TracksItem;
