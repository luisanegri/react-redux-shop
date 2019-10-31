import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList(props) {
  return (
    <div>
      <h1>All products</h1>
      <p>There are {props.products.length} products available.</p>

      <ul>
        {props.products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <div className="container">
        <div class="row">
          <div class="col-md-4">
            {props.products.map(product => (
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt="productdisplay"
                  key={product.id}
                />
                <h5 class="card-title">{product.name}</h5>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
