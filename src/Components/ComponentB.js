import React from 'react';

const ComponentB = ({ onChange }) => {
  return (
    <div>
      <h2>Component-B</h2>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ComponentB;
