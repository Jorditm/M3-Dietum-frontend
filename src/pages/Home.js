import React from 'react';

import { withAuth } from '../lib/AuthProvider';

import PatientList from '../components/PatientList';

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="container-one">
        <PatientList />
      </div>
    </div>
  );
};

export default withAuth(Home);
