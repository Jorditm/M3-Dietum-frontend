import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { withAuth } from '../lib/AuthProvider';
import foodService from '../lib/food-service';

const FoodList = () => {
  const [food, setFood] = useState([]);
  const [selectFood, setSelectFood] = useState([]);

  const getFoods = useCallback(async () => {
    try {
      const renderFoods = await foodService.foodFromDB();
      setFood(renderFoods);
      console.log(renderFoods);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    getFoods();
  }, [getFoods]);

  const filterFood = (event) => {
    const { value } = event.target;
    const listFiltered = food.filter(
      (elementList) => elementList.Descrip && elementList.Descrip.indexOf(value) !== -1
    );
    setSelectFood(listFiltered);
  };

  const renderListFood = (listFood) => {
    return listFood.map((oneFood, i) => {
      return (
        <div className="card-food" key={i}>
          <div className="title-food">
            <h6>{oneFood.Descrip}</h6>
          </div>

          <p>{oneFood.Energy_kcal} kcal/100gr</p>
          <p>{oneFood.Protein_g} Gr</p>
          <p>{oneFood.Fat_g} Gr</p>
          <p>{oneFood.Carb_g} Gr</p>
        </div>
      );
    });
  };

  return (
    <div className="container-tablefood">
      <form className="form-inline d-flex md-form form-sm justify-content-center active-pink active-pink-2 mt-2">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Busca alimento"
          aria-label="Search"
          onChange={filterFood}
        />
        {selectFood.length > 0 ? renderListFood(selectFood) : renderListFood(food)}
      </form>
    </div>
  );
};

export default withAuth(FoodList);
