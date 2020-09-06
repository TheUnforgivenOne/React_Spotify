import React from 'react';
import { BrowserRouter } from "react-router-dom";

import AuthButton from "./components/AuthButton";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthButton />
    </BrowserRouter>
  );
};

export default App;
