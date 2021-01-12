import React, { useState } from 'react';
import PatientList from '../components/PatientList';
import { withAuth } from '../lib/AuthProvider';

const AllPatients = () => (
  <div className="container container-one">
    <PatientList />
  </div>
);

export default withAuth(AllPatients);
