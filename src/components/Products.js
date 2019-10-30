import React from 'react';

export default function Products(props) {
  console.log('props', props);
  return (
    <div>
      <h1>All Products</h1>
      <p>There are {props.products.length} albums available.</p>
      <ul>
        {props.products.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
