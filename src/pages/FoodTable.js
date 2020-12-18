import React from 'react';
import { withAuth } from '../lib/AuthProvider';
import FoodList from '../components/FoodList';

const FoodTable = () => {
  return <FoodList />;
};

export default withAuth(FoodTable);
