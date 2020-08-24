import React from 'react';
import PropTypes from "prop-types";

const ArtistItem = (props) => {
  return (
    <p>
      {props.artist.name}
    </p>
  );
};

ArtistItem.propTypes = {
  name: PropTypes.string,
  spotifyLink: PropTypes.string,
  genres: PropTypes.string,
  image: PropTypes.string,
};

export default ArtistItem;
