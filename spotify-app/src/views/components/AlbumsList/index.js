import React from 'react';

import AlbumItem from "../AlbumItem";

const AlbumsList = () => {
  const albums = [
    {name: "Album 1", spotifyLink: "album1", image: "album1img", releaseDate: "date1", totalTracks: 1, listOfArtists: "artist1"},
    {name: "Album 2", spotifyLink: "album2", image: "album2img", releaseDate: "date2", totalTracks: 2, listOfArtists: "artist2"},
    {name: "Album 3", spotifyLink: "album3", image: "album3img", releaseDate: "date3", totalTracks: 3, listOfArtists: "artist3"},
  ];

  return (
    <ul>
      {albums.map((album, index) =>
        <li key={index}>
          <AlbumItem album={album} />
        </li>
      )}
    </ul>
  );
};

export default AlbumsList;
