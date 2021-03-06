import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import foodService from '../lib/food-service';

const FoodList = () => {
  // const [foodList, setFoodList] = useState([]);
  const [foodKey, setFoodKey] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(false);

  const renderListFood = () => {
    return (
      searchResult &&
      searchResult.map((oneFood, i) => {
        return (
          <Link to={`/FoodProfile/${oneFood._id}`} className="card-food" key={i}>
            <div className="head-food">
              <h6>{oneFood.Descrip}</h6>
            </div>
            {/* colocar un input para variar el peso elegido y calcule automaticamente todo lo demas */}
            <div className="macros-food">
              <p>{oneFood.Energy_kcal} kcal/100gr</p>
              <p>Prot: {oneFood.Protein_g} gr</p>
              <p>Fat: {oneFood.Fat_g} gr</p>
              <p>CH: {oneFood.Carb_g} gr</p>
            </div>
          </Link>
        );
      })
    );
  };

  const searchFood = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const findFood = await foodService.searchFood(foodKey);
      setSearchResult(findFood);
      // console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="container-tablefood">
      <p>Cargando resultados ...</p>
    </div>
  ) : (
    <div className="container-tablefood">
      <form
        onSubmit={searchFood}
        className="form-inline d-flex md-form form-sm justify-content-center active-pink active-pink-2 mt-2"
      >
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Busca alimento"
          aria-label="Search"
          onChange={(e) => setFoodKey(e.target.value)}
        />
        <input type="submit" value="Buscar" />
        {renderListFood()}
      </form>
    </div>
  );
};

export default withAuth(FoodList);
