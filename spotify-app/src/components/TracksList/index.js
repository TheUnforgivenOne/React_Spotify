import React from 'react';

import TracksItem from "../TrackItem";

const TrackList = () => {
  const tracks = [
    {name: "Track 1", spotifyLink: "track1", duration: 1.2, popularity: 1, albumName: "album1", albumSpotifyLink: "album1", artistName: "artist1", artistSpotifyLink: "artist1"},
    {name: "Track 2", spotifyLink: "track2", duration: 1.2, popularity: 2, albumName: "album2", albumSpotifyLink: "album2", artistName: "artist2", artistSpotifyLink: "artist2"},
    {name: "Track 3", spotifyLink: "track3", duration: 1.2, popularity: 2, albumName: "album3", albumSpotifyLink: "album3", artistName: "artist3", artistSpotifyLink: "artist3"},
  ];

  return (
    <ul>
      {tracks.map((track, index) =>
        <li key={index}>
          <TracksItem track={track} />
        </li>
      )}
    </ul>
  );
};

export default TrackList;
