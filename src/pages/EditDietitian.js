import React, { useState } from 'react';

import dietitianService from '../lib/dietitian-service';
import { withAuth } from '../lib/AuthProvider';

const EditDietitian = ({ editInfoDietitian, user }) => {
  const [infoDietitian, setInfoDietitian] = useState(user);

  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfoDietitian({ ...infoDietitian, [name]: value });
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    try {
      const newDataDietitian = await dietitianService.editInfoDietitian(infoDietitian);
      setInfoDietitian(newDataDietitian);
      console.log(newDataDietitian);
    } catch (error) {
      console.log('error', error);
    }
  };

  console.log(infoDietitian);
  return (
    <div>
      <h1>Pagina de edicion del usuario</h1>
      <form onSubmit={handleSubmitEdit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={infoDietitian.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={infoDietitian.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Profesional name:</label>
          <input
            type="text"
            name="proName"
            className="form-control"
            value={infoDietitian.proName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Current password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={infoDietitian.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            value="Guardar cambios"
          />
        </div>
      </form>
    </div>
  );
};

export default withAuth(EditDietitian);
