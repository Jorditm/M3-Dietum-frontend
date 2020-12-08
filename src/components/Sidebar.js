import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Sidebar extends Component {
  render() {
    const { isLoggedin } = this.props;
    return (
      <div className="sidebar">
        {isLoggedin ? (
          <>
            <div className="sidenav">
              <Link className="navBtns" to={'/'}>
                <h4>Home</h4>
              </Link>
              <Link className="navBtns" to="/PatientForm">
                <h4>Registrar paciente</h4>
              </Link>

              {/* <Link className="navBtns" to="/patientForm">Registrar Paciente</Link> */}
            </div>
          </>
        ) : (
          <>
            <div className="sidenav">
              <Link className="navBtns" to={'/'}>
                <h4>Home</h4>
              </Link>
              <Link className="navBtns" to="/login">
                Login
              </Link>
              <br />
              <Link className="navBtns" to="/signup">
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Sidebar);
