import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

import { withAuth } from '../lib/AuthProvider';

import dietistService from '../lib/dietist-service';

const PatientProfile = (props) => {
  const [patientCard, setPatientCard] = useState({});
  const [dietitian, setDietitian] = useState(props.user);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getInfo = useCallback(async () => {
    try {
      const patient = await dietistService.patientProfile(props.match.params.id);
      setPatientCard(patient);
      console.log(patient);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deletePatient = async () => {
    try {
      const findPatient = await dietistService.deletePatient(patientCard._id);
      console.log(findPatient);
      setDietitian(findPatient);
      setShow(false);
      props.history.push('/');
      // redirToHome();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div>
      <h1>PATIENT PROFILE</h1>
      <h5>nombre: {patientCard.name}</h5>
      <h5>Apellido: {patientCard.lastName}</h5>
      <p>mail: {patientCard.email}</p>
      <h2>Medidas</h2>
      <p>Edad: {patientCard.age}</p>
      <p>Peso: {patientCard.weight}</p>
      <p>Altura: {patientCard.height}</p>
      <p>{patientCard.hipPerimeter}</p>
      <p>{patientCard.neckPerimeter}</p>
      <h2>Informacion Adicional</h2>
      <p>Alergias nutricionales: {patientCard.foodAllergies}</p>
      <p>Fumador? {patientCard.smoke}</p>
      <h2>Objetivo</h2>
      <p>{patientCard.objectives}</p>
      <p></p>
      <p></p>
      <div>
        <Button className="btn btn-danger" variant="primary" onClick={handleShow}>
          Eliminar paciente
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Eliminar paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>Haciendo click en "Eliminar" se borrará el paciente</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={deletePatient}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Link className="btn btn-dark" to={'/'}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default withAuth(PatientProfile);
