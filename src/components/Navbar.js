import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import userImg from '../img/usuario.png';

import authService from '../lib/auth-service';

const Navbar = ({ user, logout, isLoggedin }) => {
  const [dietitian, setDietitian] = useState(user);
  return (
    <div className="navbar-container">
      {/* {console.log('STATE', dietitian)} */}
      {isLoggedin ? (
        <nav className="navbar navbar-expand-lg navbar-color">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li> */}
            </ul>
            <span className="navbar-text">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-custom dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="userImg" src={userImg} alt="user img" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link to={`/EditDietitian/${user._id}`}>
                    <button className="dropdown-item">Edit User</button>
                  </Link>
                  <button className="dropdown-item" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </span>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default withAuth(Navbar);
