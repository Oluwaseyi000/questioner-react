import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <Link to="/">
          <span className="q">Q</span>
          <span className="uestioner">UESTIONER</span>{' '}
        </Link>{' '}
      </h1>
      <div className="profile">
        <Link className="thelogin" to="login">
          LOG IN
        </Link>
        <Link className="thelogin" to="signup">
          SIGN UP
        </Link>
      </div>
    </header>
  );
};

export default Header;
