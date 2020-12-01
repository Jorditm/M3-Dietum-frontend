import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div class="wrapper">
        <nav id="sidebar">
          <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>

          <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                Home
              </a>
            </li>
            {isLoggedin ? (
              <>
                {/* <p>Welcome Dr. {user.name}</p> */}
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                  Pages
                </a>
                <li>
                  <Link className="navBtns" to={'/'}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link className="navBtns" to="/PatientForm">
                    Registrar paciente
                  </Link>
                </li>
                <li>
                  <button className="navBtns" onClick={logout}>
                    Logout
                  </button>
                </li>

                {/* <Link className="navBtns" to="/patientForm">Registrar Paciente</Link> */}
              </>
            ) : (
              <>
                <li>
                  <Link className="navBtns" to={'/'}>
                    <h4>Home</h4>
                  </Link>
                </li>

                <li>
                  <Link className="navBtns" to="/login">
                    Login
                  </Link>
                </li>

                <li>
                  <Link className="navBtns" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
        </div>
        <div class="overlay"></div>
      </div>
    );
  }
}

export default withAuth(Navbar);
