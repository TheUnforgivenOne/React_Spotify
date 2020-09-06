import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import './mainContent.css'

const AlbumsList = lazy(() => import('../AlbumsList'));
const ArtistsList = lazy(() => import('../ArtistsList'));
const PlaylistsList = lazy(() => import('../PlaylistsList'));
const TracksList = lazy(() => import('../TracksList'));

const MainContent = (props) => {
  return (
    <div className="main-content">
      <Suspense fallback={<div>Loading...</div>}>
        {(function() {
          switch (props.selectedContent) {
            case 'Artists':
              return <ArtistsList />;
            case 'Playlists':
              return <PlaylistsList />;
            case 'Tracks':
              return <TracksList />;
            default:
              return <AlbumsList />;
          }
        })()}
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedContent: state.content.selectedContentType
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
