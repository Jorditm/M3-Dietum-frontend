import React, { useEffect, useCallback, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../lib/AuthProvider';

import dietitianService from '../lib/dietitian-service';

const PatientList = () => {
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
          <div className="img-div">
            <img className="patient-img" src={patient.imageUrl} alt="foto de perfil del usuario" />
          </div>
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

  return <Fragment>{renderPatients()}</Fragment>;
};

export default withAuth(PatientList);
