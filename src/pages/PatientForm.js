/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dietititanService from '../lib/dietitian-service';

import { withAuth } from '../lib/AuthProvider';

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

// const ImgUser = styled.img`
//   width: 100px;
// `;

const PatientForm = ({ createPatient, add, user, history }) => {
  const [patient, setPatient] = useState({
    // imageUrl: '',
    name: '',
    lastName: '',
    email: '',
    gender: '',
    age: 0,
    weight: 0,
    height: 0,
    hipPerimeter: 0,
    neckPerimeter: 0,
    objectives: '',
    foodAllergies: '',
    smoke: '',
  });
  const [error, setError] = useState(false);
  const [dietitian, setDietitian] = useState(user);

  const {
    // imageUrl,
    name,
    lastName,
    email,
    gender,
    age,
    weight,
    height,
    hipPerimeter,
    neckPerimeter,
    objectives,
    foodAllergies,
    smoke,
  } = patient;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleGenderChange = (event) => {
    const { value } = event.target;
    // console.log(dietitian);

    setPatient({ ...patient, gender: value });
  };

  const handleSmokeChange = (event) => {
    const { value } = event.target;
    setPatient({ ...patient, smoke: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPatient = await dietititanService.createPatient(patient);
      const dietitianUpdate = await dietititanService.add(newPatient._id);
      setDietitian(dietitianUpdate);
      redirToProfile(newPatient._id);
    } catch (err) {
      console.log(err);
    }
    setPatient({
      // imageUrl: '',
      name: '',
      lastName: '',
      email: '',
      gender: '',
      age: 0,
      weight: 0,
      height: 0,
      hipPerimeter: 0,
      neckPerimeter: 0,
      objectives: '',
      foodAllergies: '',
      smoke: '',
    });

    // if (
    //   // imageUrl.trim() === null ||
    //   !name ||
    //   !lastName ||
    //   !email ||
    //   !gender ||
    //   !age ||
    //   !weight ||
    //   !height ||
    //   !hipPerimeter ||
    //   !neckPerimeter ||
    //   !objectives ||
    //   !foodAllergies ||
    //   !smoke
  };
  const redirToProfile = (patientId) => {
    history.push(`/PatientProfile/${patientId}`);
  };

  //INTRODUCIR FOTO DE PERFIL DEL PACIENTE
  // const fileOnchange = (event) => {
  //   //Consigue el archivo del form
  //   const file = event.target.files[0];
  //   //para enviar el objeto y añadir la imagen
  //   const uploadData = new FormData();
  //   uploadData.append("photo", file);
  //   axios
  //     .post(`${process.env.REACT_APP_API_URI}/dietitian/upload/`, uploadData, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setPatient({
  //         imageUrl: response.data.secure_url,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div>
      <h1>Registrer a Patient</h1>

      <form onSubmit={handleFormSubmit}>
        {error && <Error>Todos los cambios son obligatorios</Error>}

        {/* <label>profile image</label>
        <ImgUser src={imageUrl} alt="" />
        <input onChange={fileOnchange} type="file" /> */}

        <label>Género:</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="masculino"
            checked={gender === 'masculino'}
            onChange={handleGenderChange}
          />
          <label className="form-check-label">Masculino</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="femenino"
            checked={gender === 'femenino'}
            onChange={handleGenderChange}
          />
          <label className="form-check-label">Femenino</label>
        </div>

        <div className="form-row">
          <div className="col">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Last name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="exemple@email.com"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
            className="form-control"
            placeholder="Edad"
          />
        </div>

        <div className="form-group">
          <label>Peso</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="80 Kg"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Altura</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleChange}
            placeholder="175 cm"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Perimetro del cuello</label>
          <input
            type="text"
            name="neckPerimeter"
            value={neckPerimeter}
            onChange={handleChange}
            placeholder="37cm"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Perimetro de la cintura</label>
          <input
            type="text"
            name="hipPerimeter"
            value={hipPerimeter}
            onChange={handleChange}
            placeholder="85cm"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>¿Alergias alimenticias?</label>
          <input
            type="text"
            name="foodAllergies"
            value={foodAllergies}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div>
          <label>¿Fumador?</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="smoke"
              value="no"
              checked={smoke === 'no'}
              onChange={handleSmokeChange}
            />
            <label className="form-check-label">No</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="smoke"
              value="yes"
              checked={smoke === 'yes'}
              onChange={handleSmokeChange}
            />
            <label className="form-check-label">Sí</label>
          </div>
        </div>

        <div className="form-group">
          <label>Objetivos del usuario</label>
          <input
            type="text"
            name="objectives"
            value={objectives}
            onChange={handleChange}
            placeholder="Definir musculatura"
            className="form-control"
          />
        </div>

        <input
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          value="Registrar paciente"
        />
      </form>
      <div>
        <Link className="btn btn-secondary btn-sm" to={'/'}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default withAuth(PatientForm);
