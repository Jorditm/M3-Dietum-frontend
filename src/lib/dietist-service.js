import axios from 'axios';

class Dietist {
  constructor() {
    this.dietist = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  getInfoPatients() {
    return this.dietist.get('/dietist/allPatients').then(({ data }) => data);
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
    return this.dietist
      .post('/dietist/createUser', {
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
    return this.dietist.post(`/dietist/add/${id}`, {}).then(({ data }) => data);
  }

  patientProfile(id) {
    return this.dietist.get(`/dietist/profile/${id}`).then(({ data }) => data);
  }

  deletePatient(id) {
    return this.dietist.post(`/dietist/delete/${id}`, {}).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Dietist();

export default axiosRequestFunctions;
