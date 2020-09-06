import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers/rootReducer'
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage";
import Header from "./containers/Header";

import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
