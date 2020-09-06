import React from 'react';

import ArtistItem from "../ArtistItem";

const ArtistsList = () => {
  const artists = [
    {name: "Artist 1", spotifyLink: "artist1", genres: "array1", image: "artist1img"},
    {name: "Artist 2", spotifyLink: "artist2", genres: "array2", image: "artist2img"},
    {name: "Artist 3", spotifyLink: "artist3", genres: "array3", image: "artist3img"},
  ];

  return (
    <ul>
      {artists.map((artist, index) =>
        <li key={index}>
          <ArtistItem artist={artist} />
        </li>
      )}
    </ul>
  );
};

export default ArtistsList;
