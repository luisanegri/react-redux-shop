import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, loading, errorMessage }) => {
  if (loading) return <div className="before"> Loading... </div>;
  if (errorMessage) return <div className="before">{errorMessage}</div>;

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
                  <span className="card-title">{product.name}</span>
                  <span className="card-price">€{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
