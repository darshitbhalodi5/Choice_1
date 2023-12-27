import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <h2>Component-C</h2>
      <p>Written in Component-B is : <u><strong>{value}</strong></u></p>
    </div>
  );
};

export default ComponentC;
