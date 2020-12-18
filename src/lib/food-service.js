import axios from 'axios';

class Food {
  constructor() {
    this.food = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  foodFromDB() {
    return this.food.get('/food/allFoods').then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Food();

export default axiosRequestFunctions;
