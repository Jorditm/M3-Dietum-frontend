import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../lib/AuthProvider';

import dietistService from '../lib/dietist-service';

const Principal = ({ getInfoPatients }) => {
  const [viewPatients, setViewPatients] = useState([]);

  const getPatients = useCallback(async () => {
    try {
      const allPatients = await dietistService.getInfoPatients();
      console.log(allPatients.users);
      setViewPatients(allPatients.users);
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
    <div>
      <h1>PÁGINA PRINCIPAL</h1>
      <div>{renderPatients()}</div>
      <Link to={'/PatientForm'}>Registrer Patient</Link>
    </div>
  );
};

export default withAuth(Principal);
