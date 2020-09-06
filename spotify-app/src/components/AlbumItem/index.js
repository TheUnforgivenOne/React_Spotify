import React from 'react';
import PropTypes from 'prop-types'

const AlbumItem = (props) => {
  return (
    <p>
      {props.album.name}
    </p>
  );
};

AlbumItem.propTypes = {
  name: PropTypes.string,
  spotifyLink: PropTypes.string,
  image: PropTypes.string,
  releaseDate: PropTypes.string,
  totalTracks: PropTypes.number,
  listOfArtists: PropTypes.string,
};

export default AlbumItem;
