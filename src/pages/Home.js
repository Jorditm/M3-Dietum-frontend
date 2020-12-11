import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { withAuth } from '../lib/AuthProvider';

import dietitianService from '../lib/dietitian-service';
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
