import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import AuthProvider from './lib/AuthProvider';

import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Private from './pages/Private.js';
import AnonRoute from './components/AnonRoute.js';
import PrivateRoute from './components/PrivateRoute.js';
import Home from './pages/Home.js';
import PatientForm from './pages/PatientForm.js';
import PatientProfile from './pages/PatientProfile.js';
import EditDietitian from './pages/EditDietitian.js';
import Sidebar from './components/Sidebar.js';
import Navbar from './components/Navbar.js';
import EditPatient from './pages/EditPatient.js';
import AllPatients from './pages/AllPatients.js';
import DietTable from './pages/DietTable.js';
import FoodTable from './pages/FoodTable.js';
import FoodForDiet from './pages/FoodForDiet.js';
import FoodProfile from './pages/FoodProfile.js';

function App() {
  // const [dietitian, setDietitian] = useState();
  // const [patient, setPatient] = useState();
  //crear state con el user para pasarlo a los hijos y esten pueda acceder a los datos

  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar />
        <Sidebar />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/PatientForm" component={PatientForm} />
          <PrivateRoute exact path="/PatientProfile/:id" component={PatientProfile} />
          <PrivateRoute exact path="/AllPatients" component={AllPatients} />
          <PrivateRoute exact path="/EditDietitian/:id" component={EditDietitian} />
          <PrivateRoute exact path="/EditPatient/:id" component={EditPatient} />
          <PrivateRoute exact path="/foodTable" component={FoodTable} />
          <PrivateRoute exact path="/:id/dietTable" component={DietTable} />
          <PrivateRoute exact path="/:id/dietTable/:tableMenu/foods" component={FoodForDiet} />
          <PrivateRoute exact path="/foodProfile/:id" component={FoodProfile} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
