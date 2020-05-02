import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const empty = !props.cart.length;
  if (empty) {
    return (
      <p
        style={{
          marginTop: '100px',
          textAlign: 'center',
          fontFamily: 'Quicksand',
          fontWeight: 500,
        }}
      >
        Your bag is empty!
      </p>
    );
  }
  return (
    <div className="wrapper-cart">
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-left-cart">
            <h5>Your bag</h5>
            <Link to="/products" className="btn btn-link btn-delete btn-rm-bg">
              <span>
                <i className="fa fa-chevron-left"></i>
              </span>
              Keep Shopping
            </Link>
          </div>
          <div className="col-xs-12 col-md-8 col-right-cart">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Ref.</th>
                  <th scope="col" className="qty">
                    Qty.
                  </th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {props.cart.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">{product.name}</th>
                    <td>87320</td>
                    <th scope="row" className="qty">
                      <div className="wrap-id">
                        <span>
                          <button
                            type="button"
                            className="btn btn-id btn-rm-bg"
                            onClick={() =>
                              props.clearProductFromCart(product.id)
                            }
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </span>
                        <span>{product.quantity}</span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-id btn-rm-bg"
                            onClick={() => props.addProduct(product)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </span>
                      </div>
                    </th>
                    <th scope="row">
                      <button
                        type="button"
                        className="btn btn-link btn-delete btn-rm-bg"
                        onClick={() => props.removeProduct(product.id)}
                      >
                        Delete
                      </button>
                    </th>
                    <td>€ {product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button className="custom-button">Checkout</button>
      </div>
    </div>
  );
}
