import React from 'react';

import ContentTypePicker from "../ContentTypePicker";

import './navigationBar.css'

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <ContentTypePicker type={"Artists"} />
      <ContentTypePicker type={"Tracks"} />
      <ContentTypePicker type={"Playlists"} />
      <ContentTypePicker type={"Albums"} />
    </div>
  );
};

export default NavigationBar;
