import React from 'react';

export default function ProductDetail(props) {
  console.log('props are you there?', props);
  return (
    <div>
      <h1>Product Detail</h1>
      {/* {props.products.map(product => (
        <p>{product.name}</p>
      ))} */}
      <p>Hi</p>
      {props.product.name}
    </div>
  );
}
