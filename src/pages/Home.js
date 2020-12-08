import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { withAuth } from '../lib/AuthProvider';

import dietitianService from '../lib/dietitian-service';

const Home = () => {
  const [viewPatients, setViewPatients] = useState([]);

  const getPatients = useCallback(async () => {
    try {
      const allPatients = await dietitianService.getInfoPatients();
      setViewPatients(allPatients.patients);
    } catch (err) {
      console.log('ERROR EN PAGINA Home', err);
    }
  }, []);

  const renderPatients = () => {
    return viewPatients.map((patient) => {
      return (
        <Link className="patient-card" key={patient._id} to={`/PatientProfile/${patient._id}`}>
          <img className="patient-img" src={patient.imageUrl} alt="foto de perfil del usuario" />
          <div className="patient-text">
            <div>{patient.name}</div>
            <div>{patient.lastName}</div>
          </div>
        </Link>
      );
    });
  };

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  return (
    <div className="home-container">
      {viewPatients.length !== 0 ? (
        <div className="container-one">{renderPatients()}</div>
      ) : (
        <div>
          <h3>no hay clientes registrados aun </h3>
        </div>
      )}
    </div>
  );
};

export default withAuth(Home);
