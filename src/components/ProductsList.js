import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
  return (
    <div className="product-list-component">
      <h4>Products</h4>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-mb">
              <div className="card product-list">
                <div className="image-wrapper">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt="productdisplay"
                  />
                  <Link to={`/product/${product.id}`}>
                    <div className="middle">
                      <div className="text">View</div>
                    </div>
                  </Link>
                  <h5 className="card-title">{product.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
