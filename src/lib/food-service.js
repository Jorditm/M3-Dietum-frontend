import axios from 'axios';

class Food {
  constructor() {
    this.food = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  allFoods() {
    return this.food.get('/food/allFoods').then(({ data }) => data);
  }

  getFoodDetails(id) {
    return this.food.get(`/food/getFood/${id}`).then(({ data }) => data);
  }

  searchFood(name) {
    return this.food.post(`/food/searchFood`, { textToSearch: name }).then(({ data }) => data);
  }

  // createTable({ desayuno, almuerzo, comida, merienda, cena }) {
  //   return this.food
  //     .post(`/food/createTable`, { desayuno, almuerzo, comida, merienda, cena })
  //     .then(({ data }) => data);
  // }

  // addTable(patientId, tableId) {
  //   return this.food.post(`/food/addTable/${patientId}/${tableId}`, {}).then(({ data }) => data);
  // }

  // getTable(id) {
  //   return this.food.get(`/food/tableFood/${id}`).then(({ data }) => data);
  // }

  // deleteTable(id) {
  //   return this.food.post(`/food/delete/${id}`, {}).then(({ data }) => data);
  // }
}

const axiosRequestFunctions = new Food();

export default axiosRequestFunctions;
