import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} id="home-btn">
          <h4>Home</h4>
        </Link>
        {isLoggedin ? (
          <>
            <Link to="/PatientForm" className="navbtn">
              <h4>Registrar paciente</h4>
            </Link>
            <p className="navbar-user">username: {user.name}</p>
            <button className="navbar-button" onClick={logout}>
              Logout
            </button>
            {/* <Link to="/patientForm">Registrar Paciente</Link> */}
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
