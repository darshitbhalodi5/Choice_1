import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from './redux/actions';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import "./Styles/style.css";

const ComponentA = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setValue(value));
  };

  return (
    <div>
      <div className="container"> 
      <h2>Component-A</h2>
      <hr></hr>
      <ComponentB onChange={handleChange} />
      <hr></hr>
      <ComponentC />
    </div>
    </div>
  );
};

export default ComponentA;
