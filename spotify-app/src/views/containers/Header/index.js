import React from 'react';
import { Link } from "react-router-dom";

import AuthButton from "../../components/AuthButton";

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <AuthButton />
    </div>
  );
};

export default Header;
