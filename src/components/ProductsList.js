import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList(props) {
  return (
    <div className="product-list-component">
      <h4>Products</h4>
      {/* <p>There are {props.products.length} products available.</p> */}

      <div className="container">
        <div class="row">
          {props.products.map(product => (
            <div class="col-md-4 col-mb">
              <div className="card product-list">
                <div className="image-wrapper">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt="productdisplay"
                    key={product.id}
                  />
                  <Link to={`/product/${product.id}`}>
                    <div class="middle">
                      <div class="text">View</div>
                    </div>
                  </Link>
                </div>

                <h5 class="card-title">{product.name}</h5>

                {/* <p className="card-text">{product.price} </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
