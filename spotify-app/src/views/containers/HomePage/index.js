import React from 'react';

import NavigationBar from "../NavigationBar";
import MainContent from "../../components/MainContent";

import './homePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <MainContent />
    </div>
  );
};

export default HomePage;
