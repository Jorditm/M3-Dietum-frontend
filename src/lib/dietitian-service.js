import axios from 'axios';

class Dietitian {
  constructor() {
    this.dietitian = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  getInfoPatients() {
    return this.dietitian.get('/dietitian/allPatients').then(({ data }) => data);
  }

  createPatient({
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
  }) {
    return this.dietitian
      .post('/dietitian/createPatient', {
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
      })
      .then(({ data }) => data);
  }

  add(id) {
    return this.dietitian.post(`/dietitian/add/${id}`, {}).then(({ data }) => data);
  }

  patientProfile(id) {
    return this.dietitian.get(`/dietitian/profile/${id}`).then(({ data }) => data);
  }

  deletePatient(id) {
    return this.dietitian.post(`/dietitian/delete/${id}`, {}).then(({ data }) => data);
  }
  editInfodietitian({ id, name, lastName, proName, password }) {
    return this.dietitian
      .put(`/dietitian/edit/${id}`, { name, lastName, proName, password })
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Dietitian();

export default axiosRequestFunctions;
