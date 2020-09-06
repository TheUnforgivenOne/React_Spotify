import React from 'react';

import PlaylistItem from "../PlaylistItem";

const PlaylistsList = () => {
  const palylists = [
    {name: "Playlist 1", spotifyLink: "playlist1", image: "playlist1img", ownerName: "owner1", tracksCount: 1},
    {name: "Playlist 2", spotifyLink: "playlist2", image: "playlist2img", ownerName: "owner2", tracksCount: 1},
    {name: "Playlist 3", spotifyLink: "playlist3", image: "playlist3img", ownerName: "owner3", tracksCount: 1},
  ];

  return (
    <ul>
      {palylists.map((playlist, index) =>
        <li key={index}>
          <PlaylistItem playlist={playlist} />
        </li>
      )}
    </ul>
  );
};

export default PlaylistsList;
