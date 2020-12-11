import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import AuthProvider from './lib/AuthProvider';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm';
import PatientProfile from './pages/PatientProfile';
import EditDietitian from './pages/EditDietitian';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import EditPatient from './pages/EditPatient';
import AllPatients from './pages/AllPatients';
import DietTable from './pages/DietTable';

function App() {
  // const [dietitian, setDietitian] = useState();
  // const [patient, setPatient] = useState();
  //crear state con el user para pasarlo a los hijos y esten "informados"

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
          {/* <PrivateRoute exact component={PatientProfile} /> */}
          <PrivateRoute exact path="/PatientProfile/:id" component={PatientProfile} />
          <PrivateRoute exact path="/AllPatients" component={AllPatients} />
          <PrivateRoute exact path="/EditDietitian/:id" component={EditDietitian} />
          <PrivateRoute exact path="/EditPatient/:id" component={EditPatient} />
          <PrivateRoute exact path="/DietTable" component={DietTable} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
