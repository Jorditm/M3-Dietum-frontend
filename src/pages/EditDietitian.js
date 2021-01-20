import React, { useState } from 'react';

import dietitianService from '../lib/dietitian-service';
import { withAuth } from '../lib/AuthProvider';

const EditDietitian = ({ user, history }) => {
  const [infoDietitian, setInfoDietitian] = useState(user);

  const [mensaje, setMensaje] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfoDietitian({ ...infoDietitian, [name]: value });
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    try {
      const newDataDietitian = await dietitianService.editInfoDietitian(infoDietitian);
      setInfoDietitian(newDataDietitian);
      setMensaje(true);
      user.name = 'Michel';
      setTimeout(() => setMensaje(false), 2000);
      // history.push('/');
      console.log('state edit', infoDietitian);
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
    }
  };

  //   console.log(infoDietitian);
  return (
    <div className="container">
      {console.log(user)}
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

        {mensaje ? (
          <div className="p-3 mb-2 bg-success text-white">Cambios guardados correctamente</div>
        ) : null}
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
