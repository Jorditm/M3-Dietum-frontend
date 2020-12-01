import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../lib/AuthProvider';

import dietitianService from '../lib/dietitian-service';

const Principal = ({ getInfoPatients, user }) => {
  const [viewPatients, setViewPatients] = useState([]);

  const getPatients = useCallback(async () => {
    try {
      const allPatients = await dietitianService.getInfoPatients();
      //setViewPatients(allPatients.patients);
    } catch (err) {
      console.log('ERROR EN PAGINA PRINCIPAL', err);
    }
  }, []);

  const renderPatients = () => {
    return viewPatients.map((patient) => {
      return (
        <div key={patient._id}>
          <Link to={`/PatientProfile/${patient._id}`}>
            <div>
              {patient.name} {patient.lastName}
            </div>
          </Link>
        </div>
      );
    });
  };

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  return (
    <div className="home-container">
      <h1>PÁGINA PRINCIPAL</h1>
      {viewPatients.length !== 0 ? (
        <div>{renderPatients()}</div>
      ) : (
        <div>
          <h3>no hay clientes registrados aun </h3>
        </div>
      )}
    </div>
  );
};

export default withAuth(Principal);
