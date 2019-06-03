import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <Link to="/">
          <span className="q">Q</span>
          <span className="uestioner">UESTIONER</span>
        </Link>
      </h1>

      <div className="profile">
        <a id="adminStatus" className="thelogin" href="../admin/meetups.html">
          ADMIN{' '}
        </a>
        <img
          id="dropdown"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt=""
        />
        <br /> <span className="time" id="currentTime" />
      </div>
    </header>
  );
};

export default HeaderLogin;
