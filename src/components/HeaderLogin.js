import React from 'react';

const HeaderLogin = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <a href="../index.html">
          <span className="q">Q</span>
          <span className="uestioner">UESTIONER</span>
        </a>{' '}
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
