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

  addFoodtoTable(foodId, tableMenu, patientId) {
    return this.food
      .post(`/food/addFood`, { foodId, tableMenu, patientId })
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Food();

export default axiosRequestFunctions;
