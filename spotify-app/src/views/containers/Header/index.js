import React from 'react';
import { Link } from "react-router-dom";

import AuthButton from "../../components/AuthButton";
import SearchForm from "../../components/SearchForm";

import './header.css';

const Header = () => {
  const submitForm = (value) => {
    console.log('Form values', value);
  };

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <SearchForm onSubmit={submitForm} />
      <AuthButton />
    </div>
  );
};

export default Header;
