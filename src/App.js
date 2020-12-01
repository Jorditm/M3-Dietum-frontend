import React, { Component } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import AuthProvider from './lib/AuthProvider';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import Principal from './pages/Principal';
import PatientForm from './pages/PatientForm';
import PatientProfile from './pages/PatientProfile';
import EditDietitian from './pages/EditDietitian';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="main-container">
          <Navbar />

          <Switch>
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/" component={Principal} />
            <PrivateRoute exact path="/PatientForm" component={PatientForm} />
            {/* <PrivateRoute exact component={PatientProfile} /> */}
            <PrivateRoute exact path="/PatientProfile/:id" component={PatientProfile} />
            <PrivateRoute exact path="/EditDietitian/:id" component={EditDietitian} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
