import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthButton from "./components/AuthButton";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthButton />
      <Switch>
        <Route path="user">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
