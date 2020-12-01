import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from "styled-components";

import { withAuth } from '../lib/AuthProvider';

class Login extends Component {
  state = { email: '', password: '' };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    // console.log("Login -> form submit", { email, password });
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { showError } = this.props;

    return (
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <input type="submit" value="Login" className="btn btn-primary btn-lg btn-block" />
        </form>

        {!showError && (
          <div>
            <p>Incorrect password or email</p>
          </div>
        )}

        <p>Already have account?</p>
        <Link to={'/signup'} className="btn btn-secondary btn-sm">
          Go to Sign up
        </Link>
      </div>
    );
  }
}

export default withAuth(Login);
