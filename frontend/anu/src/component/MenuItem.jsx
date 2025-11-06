import React from 'react';

function MenuItem({ name, price, image }) {
  return (
    <div style={{ border: '1px solid #d4c62cff', padding: '20px', width: '180px', textAlign: 'center' }}>
      <img src={image} alt={name} width="100" />
      <h3>{name}</h3>
      <p>Rate: ₹{price}</p>
    </div>
  );
}

export default MenuItem;
