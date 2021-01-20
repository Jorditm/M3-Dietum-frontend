import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

const DietTable = (props) => {
  //   const handleShow = () => {
  //     console.log('click');
  //   };

  return (
    <div className="diet-container">
      <div className="diet-container-one">
        <div className="title-diettable">
          <h2>Desayuno</h2>
          <Link to={`/${props.match.params.id}/dietTable/desayuno/foods`}>+</Link>
        </div>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>
      <div className="diet-container-two">
        <div className="title-diettable">
          <h2>Almuerzo</h2>
          <Link to={`/${props.match.params.id}/dietTable/almuerzo/foods`}>+</Link>
        </div>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>
      <div className="diet-container-three">
        <div className="title-diettable">
          <h2>Comida</h2>
          <Link to={`/${props.match.params.id}/dietTable/comida/foods`}>+</Link>
        </div>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>
      <div className="diet-container-four">
        <div className="title-diettable">
          <h2>Merienda</h2>
          <Link to={`/${props.match.params.id}/dietTable/merienda/foods`}>+</Link>
        </div>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>
      <div className="diet-container-five">
        <div className="title-diettable">
          <h2>Cena</h2>
          <Link to={`/${props.match.params.id}/dietTable/cena/foods`}>+</Link>
        </div>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>
      <div className="diet-container-six">
        <h2>TOTAL KCAL</h2>
        <div className="totals">
          <p>Energia: 0 kcal</p>
          <p>Prot: 0gr</p>
          <p>CH: 0gr</p>
          <p>Fat: 0gr</p>
        </div>
      </div>

      <div className="diet-container-seven">
        <h2>GRAFICA</h2>
      </div>
    </div>
  );
};

export default withAuth(DietTable);
