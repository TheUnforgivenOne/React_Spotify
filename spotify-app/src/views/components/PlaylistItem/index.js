import React from 'react';
import PropTypes from "prop-types";

const PlaylistItem = (props) => {
  return (
    <p>
      {props.playlist.name}
    </p>
  );
};

PlaylistItem.propTypes = {
  name: PropTypes.string,
  spotifyLink: PropTypes.string,
  image: PropTypes.string,
  ownerName: PropTypes.string,
  tracksCount: PropTypes.number,
};

export default PlaylistItem;
