import React, { useState, useCallback, useEffect } from 'react';
import { withAuth } from '../lib/AuthProvider';

import foodService from '../lib/food-service';

const FoodProfile = (props) => {
  const [food, setFood] = useState({});

  const getInfoFood = useCallback(async () => {
    try {
      const renderFood = await foodService.getFoodDetails(props.match.params.id);
      setFood(renderFood);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleEstimate = (event) => {
  //   const { name, value } = event.target;
  // };

  useEffect(() => {
    getInfoFood();
  }, [getInfoFood]);

  return (
    <div className="cardFood-container">
      <div className="cardFood-container-one">
        <div>
          <h1>{food.Descrip}</h1>
        </div>
        <div>{/* <input type="number" onChange={handleEstimate} /> */}</div>
      </div>
      <div className="cardFood-container-two">
        <div>
          <p>Energy:{food.Energy_kcal}kcal / 100gr</p>
        </div>
        <div>
          <p>Fat: {food.Fat_g} gr</p>
        </div>
        <div>
          <p>Carbohidrates: {food.Carb_g} gr</p>
        </div>
        <div>
          <p>Proteins: {food.Protein_g} gr</p>
        </div>
      </div>
      <div className="cardFood-container-three">
        <div className="micro-title">
          <h2>Micro nutrients</h2>
        </div>
        <div className="micro-elements">
          <div className="vits">
            <h3>Vitamins</h3>
            <p>Vitamin A: {food.VitA_mcg} micro gr</p>
            <p>Thiamin (Vitamin B1): {food.Thiamin_mg} mg</p>
            <p>Riboflavin (Vitamin B2): {food.Riboflavin_mg} mg</p>
            <p>Niacin (Vitamin B3): {food.Niacin_mg} mg</p>
            <p>Vitamin B6: {food.VitB6_mg} mg</p>
            <p>Vitamin B12: {food.VitB12_mcg} micro gr</p>
            <p>Vitamin C: {food.VitC_mg} mg</p>
            <p>Vitamin E: {food.VitE_mg} mg</p>
            <p>Folate: {food.Folate_mcg} micro gr</p>
          </div>
          <div className="minerals">
            <h3>Minerals and trace elements</h3>
            <p>Sugar: {food.Sugar_g} gr</p>
            <p>Fiber: {food.Fiber_g} gr</p>
            <p>Calcium: {food.Calcium_mg} mg</p>
            <p>Copper: {food.Copper_mcg} micro gr</p>
            <p>Iron: {food.Iron_mg} mg</p>
            <p>Magnesium: {food.Magnesium_mg} mg</p>
            <p>Manganese: {food.Manganese_mg} mg</p>
            <p>Phosphorus: {food.Phosphorus_mg} mg</p>
            <p>Selenium: {food.Selenium_mcg} micro gr</p>
            <p>Zinc: {food.Zinc_mg} mg</p>
          </div>
        </div>
      </div>
      <div className="cardFood-container-four">
        <h1>AQUI VA LA GRAFICA</h1>
      </div>
    </div>
  );
};

export default withAuth(FoodProfile);
