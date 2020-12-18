import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

import { withAuth } from '../lib/AuthProvider';

import dietitianService from '../lib/dietitian-service';

const PatientProfile = (props) => {
  const [patientCard, setPatientCard] = useState({});
  const [dietitian, setDietitian] = useState(props.user);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getInfo = useCallback(async () => {
    try {
      const patient = await dietitianService.patientProfile(props.match.params.id);
      setPatientCard(patient);
      console.log(patient);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deletePatient = async () => {
    try {
      const findPatient = await dietitianService.deletePatient(patientCard._id);
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
    <div className="patient-container">
      <div className="patient-container-one">
        <img className="profile-patient-img" src={patientCard.imageUrl} alt="user-img" />
      </div>
      <div className="patient-container-two">
        <h5>{patientCard.name}</h5>
        <h5>{patientCard.lastName}</h5>
        <p>{patientCard.email}</p>
      </div>
      <div className="patient-container-three">
        <h2>Medidas</h2>
        <p>Edad: {patientCard.age}</p>
        <p>Peso: {patientCard.weight}</p>
        <p>Altura: {patientCard.height}</p>
        <p>{patientCard.hipPerimeter}</p>
        <p>{patientCard.neckPerimeter}</p>
      </div>
      <div className="patient-container-four">
        <h2>Informacion Adicional</h2>
        <p>Alergias nutricionales: {patientCard.foodAllergies}</p>
        <p>Fumador? {patientCard.smoke}</p>
      </div>
      <div className="patient-container-five">
        <h2>Objetivo</h2>
        <p>{patientCard.objectives}</p>
      </div>
      <div className="patient-container-six">
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
          <Link
            to={`/EditPatient/${patientCard._id}`}
            className="btn btn-success"
            variant="primary"
          >
            Editar paciente
          </Link>
        </div>
        {/* <div>
          <Link className="btn btn-dark" to={'/'}>
            Home
          </Link>
        </div> */}
      </div>
      <div className="patient-container-seven">
        <h2>Grafica de evolución</h2>
        <p>AQUI AÑADO UNA GRAFICA DE EVOLUCION</p>
      </div>

      <div className="patient-container-eight">
        <h2>Mensajes</h2>
        <button type="button" className="btn btn-primary">
          + Añadir comentario
        </button>
      </div>
      <div className="patient-container-nine">
        <Link to={`/${patientCard._id}/DietTable`} className="btn btn-primary">
          Editar Dieta
        </Link>
      </div>
    </div>
  );
};

export default withAuth(PatientProfile);
