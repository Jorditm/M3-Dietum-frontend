import React from 'react';
import { withAuth } from '../lib/AuthProvider';
import FoodList from '../components/FoodList';

const FoodForDiet = () => {
  return <FoodList />;
};

export default withAuth(FoodForDiet);
